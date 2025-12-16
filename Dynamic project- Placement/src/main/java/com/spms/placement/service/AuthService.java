package com.spms.placement.service;

import com.spms.placement.dto.request.LoginRequest;
import com.spms.placement.dto.response.AuthResponse;

public interface AuthService {

    AuthResponse registerStudent(String username, String email, String password, String fullName, String regNumber, String course, Integer year);

    AuthResponse registerCompany(String username, String email, String password, String companyName, String contactPerson);

    AuthResponse login(LoginRequest request);
}
