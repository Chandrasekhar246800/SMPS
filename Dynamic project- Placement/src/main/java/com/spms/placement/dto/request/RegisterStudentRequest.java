package com.spms.placement.dto.request;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class RegisterStudentRequest {

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 6 characters")
    private String password;

    @NotBlank(message = "Username is required")
    @Size(min = 3, max = 50, message = "Username must be between 3 and 50 characters")
    private String username;

    @NotBlank(message = "Full name is required")
    @Size(max = 100, message = "Full name must not exceed 100 characters")
    private String fullName;

    @NotBlank(message = "Registration number is required")
    @Size(max = 20, message = "Registration number must not exceed 20 characters")
    private String regNumber;

    @NotBlank(message = "Course is required")
    @Size(max = 50, message = "Course name must not exceed 50 characters")
    private String course;

    @NotNull(message = "Year is required")
    @Min(value = 1, message = "Year must be at least 1")
    @Max(value = 5, message = "Year must not exceed 5")
    private Integer year;

    @Min(value = 0, message = "CGPA must be at least 0")
    @Max(value = 10, message = "CGPA must not exceed 10")
    private Double cgpa;
}
