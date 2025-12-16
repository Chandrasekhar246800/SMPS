package com.spms.placement.service.impl;

import com.spms.placement.dto.request.LoginRequest;
import com.spms.placement.dto.response.AuthResponse;
import com.spms.placement.entity.*;
import com.spms.placement.mapper.AuthMapper;
import com.spms.placement.repository.CompanyRepository;
import com.spms.placement.repository.StudentRepository;
import com.spms.placement.repository.UserRepository;
import com.spms.placement.security.jwt.JwtUtil;
import com.spms.placement.service.AuthService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService {

    private final UserRepository userRepository;
    private final StudentRepository studentRepository;
    private final CompanyRepository companyRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    @Override
    @Transactional
    public AuthResponse registerStudent(String username, String email, String password, String fullName,
            String regNumber, String course, Integer year) {
        log.info("=== REGISTER STUDENT START ===");
        log.info("Email: {}, Username: {}, RegNumber: {}", email, username, regNumber);
        
        try {
            // Check if email already exists
            if (userRepository.existsByEmail(email)) {
                throw new IllegalArgumentException("Email already registered");
            }

            // Check if username already exists
            if (userRepository.existsByUsername(username)) {
                throw new IllegalArgumentException("Username already taken");
            }

            // Check if registration number already exists
            if (studentRepository.existsByRegNumber(regNumber)) {
                throw new IllegalArgumentException("Registration number already exists");
            }

            log.info("Step 1: Creating User entity");
            // Create User entity
            User user = User.builder()
                    .username(username)
                    .email(email)
                    .password(passwordEncoder.encode(password))
                    .role(Role.STUDENT)
                    .enabled(true)
                    .name(fullName)
                    .build();

            log.info("Step 2: Saving User");
            user = userRepository.save(user);
            log.info("Step 2: User saved with ID: {}", user.getId());

            log.info("Step 3: Creating Student entity");
            // Create Student entity
            Student student = Student.builder()
                    .user(user)
                    .regNumber(regNumber)
                    .fullName(fullName)
                    .course(course)
                    .year(year)
                    .isPlaced(false)
                    .build();

            log.info("Step 4: Saving Student");
            studentRepository.save(student);
            log.info("Step 4: Student saved");

            log.info("Step 5: Building response");
            String token = jwtUtil.generateToken(user.getEmail());
            AuthResponse response = AuthMapper.toResponse(user, token);
            log.info("=== REGISTER STUDENT SUCCESS ===");
            return response;
            
        } catch (IllegalArgumentException e) {
            log.error("IllegalArgumentException: {}", e.getMessage());
            throw e;
        } catch (org.springframework.dao.DataIntegrityViolationException e) {
            log.error("DataIntegrityViolationException: Database constraint violation");
            log.error("Exception message: {}", e.getMessage());
            log.error("Root cause:", e.getRootCause());
            throw new IllegalArgumentException("Database constraint violation: " + e.getMostSpecificCause().getMessage());
        } catch (Exception e) {
            log.error("UNEXPECTED EXCEPTION in registerStudent(): {}", e.getClass().getName());
            log.error("Exception message: {}", e.getMessage());
            log.error("Stack trace:", e);
            throw new RuntimeException("Registration failed: " + e.getMessage(), e);
        }
    }

    @Override
    @Transactional
    public AuthResponse registerCompany(String username, String email, String password, String companyName,
            String contactPerson) {
        // Check if email already exists
        if (userRepository.existsByEmail(email)) {
            throw new RuntimeException("Email already registered");
        }

        // Check if username already exists
        if (userRepository.existsByUsername(username)) {
            throw new RuntimeException("Username already taken");
        }

        // Check if company name already exists
        if (companyRepository.existsByName(companyName)) {
            throw new RuntimeException("Company name already registered");
        }

        // Create User entity
        User user = User.builder()
                .username(username)
                .email(email)
                .password(passwordEncoder.encode(password))
                .role(Role.COMPANY)
                .enabled(true)
                .name(contactPerson)
                .build();

        user = userRepository.save(user);

        // Create Company entity
        Company company = Company.builder()
                .user(user)
                .name(companyName)
                .contactPerson(contactPerson)
                .contactEmail(email)
                .status(CompanyStatus.PENDING)
                .isVerified(false)
                .build();

        companyRepository.save(company);

        String token = jwtUtil.generateToken(user.getEmail());
        return AuthMapper.toResponse(user, token);
    }

    @Override
    public AuthResponse login(LoginRequest request) {
        log.info("=== LOGIN START ===");
        log.info("Email: {}", request.getEmail());
        
        try {
            log.info("Step 1: Finding user by email");
            User user = userRepository.findByEmail(request.getEmail())
                    .orElseThrow(() -> new IllegalArgumentException("Invalid credentials"));
            
            log.info("Step 2: User found - ID: {}, Username: {}", user.getId(), user.getUsername());
            log.info("Step 3: Password in DB (first 10 chars): {}", 
                    user.getPassword() != null ? user.getPassword().substring(0, Math.min(10, user.getPassword().length())) : "NULL");
            
            log.info("Step 4: Attempting password match");
            if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
                log.warn("Step 4: Password did NOT match");
                throw new IllegalArgumentException("Invalid credentials");
            }
            log.info("Step 4: Password matched successfully");
            
            log.info("Step 5: Building response");
            String token = jwtUtil.generateToken(user.getEmail());
            AuthResponse response = AuthResponse.builder()
                    .userId(user.getId())
                    .email(user.getEmail())
                    .username(user.getUsername())
                    .role(user.getRole().name())
                    .token(token)
                    .build();
            
            log.info("Step 6: Response built successfully");
            log.info("=== LOGIN SUCCESS ===");
            return response;
            
        } catch (IllegalArgumentException e) {
            log.error("IllegalArgumentException: {}", e.getMessage());
            throw e;
        } catch (Exception e) {
            log.error("UNEXPECTED EXCEPTION in login(): {}", e.getClass().getName());
            log.error("Exception message: {}", e.getMessage());
            log.error("Stack trace:", e);
            throw new RuntimeException("Login failed: " + e.getMessage(), e);
        }
    }
}
