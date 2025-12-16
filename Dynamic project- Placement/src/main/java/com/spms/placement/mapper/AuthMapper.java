package com.spms.placement.mapper;

import com.spms.placement.dto.response.AuthResponse;
import com.spms.placement.entity.User;

public class AuthMapper {

    private AuthMapper() {
        // Private constructor to prevent instantiation
    }

    public static AuthResponse toResponse(User user, String token) {
        if (user == null) {
            return null;
        }

        return AuthResponse.builder()
                .token(token)
                .userId(user.getId())
                .email(user.getEmail())
                .username(user.getUsername())
                .role(user.getRole().name())
                .build();
    }
}
