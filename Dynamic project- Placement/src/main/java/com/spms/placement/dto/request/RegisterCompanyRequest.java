package com.spms.placement.dto.request;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class RegisterCompanyRequest {

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

    @NotBlank(message = "Password is required")
    @Size(min = 6, message = "Password must be at least 6 characters")
    private String password;

    @NotBlank(message = "Username is required")
    @Size(min = 3, max = 50, message = "Username must be between 3 and 50 characters")
    private String username;

    @NotBlank(message = "Company name is required")
    @Size(max = 100, message = "Company name must not exceed 100 characters")
    private String companyName;

    @NotBlank(message = "Contact person is required")
    @Size(max = 100, message = "Contact person name must not exceed 100 characters")
    private String contactPerson;

    @Email(message = "Invalid contact email format")
    private String contactEmail;

    @Size(max = 15, message = "Phone number must not exceed 15 characters")
    private String phone;

    @Size(max = 255, message = "Website URL must not exceed 255 characters")
    private String website;
}
