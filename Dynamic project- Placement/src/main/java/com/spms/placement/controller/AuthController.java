package com.spms.placement.controller;

import com.spms.placement.dto.request.LoginRequest;
import com.spms.placement.dto.request.RegisterCompanyRequest;
import com.spms.placement.dto.request.RegisterStudentRequest;
import com.spms.placement.dto.response.AuthResponse;
import com.spms.placement.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register/student")
    public ResponseEntity<AuthResponse> registerStudent(@Valid @RequestBody RegisterStudentRequest request) {
        AuthResponse response = authService.registerStudent(
                request.getUsername(),
                request.getEmail(),
                request.getPassword(),
                request.getFullName(),
                request.getRegNumber(),
                request.getCourse(),
                request.getYear()
        );
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PostMapping("/register/company")
    public ResponseEntity<AuthResponse> registerCompany(@Valid @RequestBody RegisterCompanyRequest request) {
        AuthResponse response = authService.registerCompany(
                request.getUsername(),
                request.getEmail(),
                request.getPassword(),
                request.getCompanyName(),
                request.getContactPerson()
        );
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest request) {
        log.info("===== [DEBUG] LOGIN START =====");
        log.info("[DEBUG] Email: {}", request.getEmail());
        log.info("[DEBUG] Password (RAW): {}", request.getPassword());
        
        log.info("[DEBUG] About to call authService.login()");
        AuthResponse response = authService.login(request);
        log.info("[DEBUG] Service call completed successfully");
        
        log.info("[DEBUG] Response userId: {}", response.getUserId());
        log.info("===== [DEBUG] LOGIN END =====");
        
        return ResponseEntity.ok(response);
    }
}
