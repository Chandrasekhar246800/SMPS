package com.spms.placement.dto.response;

import com.spms.placement.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {

    private String token;

    private Long userId;

    private String role;

    private String email;

    private String username;
}
