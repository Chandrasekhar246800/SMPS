package com.spms.placement.mapper;

import com.spms.placement.dto.response.AuthResponse;
import com.spms.placement.entity.User;

public class UserMapper {

    private UserMapper() {
        // Private constructor to prevent instantiation
    }

    public static AuthResponse toAuthResponse(User user) {
        if (user == null) {
            return null;
        }

        return AuthResponse.builder()
                .userId(user.getId())
                .email(user.getEmail())
                .username(user.getUsername())
                .role(user.getRole().name())
                .build();
    }

    public static AuthResponse toAuthResponse(User user, String token) {
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
