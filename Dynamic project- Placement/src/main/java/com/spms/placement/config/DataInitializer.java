package com.spms.placement.config;

import com.spms.placement.entity.Role;
import com.spms.placement.entity.User;
import com.spms.placement.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class DataInitializer implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) {
        initializeAdminUser();
    }

    private void initializeAdminUser() {
        String adminEmail = "chandrasekhar246800@gmail.com";
        
        if (!userRepository.existsByEmail(adminEmail)) {
            User admin = User.builder()
                    .username("Reddy246800")
                    .email(adminEmail)
                    .password(passwordEncoder.encode("Reddy@246800"))
                    .name("Administrator")
                    .role(Role.ADMIN)
                    .enabled(true)
                    .build();
            
            userRepository.save(admin);
            log.info("✅ Admin user created successfully - Email: {}", adminEmail);
        } else {
            log.info("ℹ️ Admin user already exists - Email: {}", adminEmail);
        }
    }
}
