package com.spms.placement.security;

import com.spms.placement.entity.User;
import com.spms.placement.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Collections;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    /**
     * Load user by email (username in Spring Security context)
     * @param email - user's email address
     * @return UserDetails object containing user authentication info
     * @throws UsernameNotFoundException if user not found
     */
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));

        return org.springframework.security.core.userdetails.User.builder()
                .username(user.getEmail())
                .password(user.getPassword())
                .authorities(getAuthorities(user))
                .disabled(!user.getEnabled())
                .accountExpired(false)
                .accountLocked(false)
                .credentialsExpired(false)
                .build();
    }

    /**
     * Convert user role to Spring Security GrantedAuthority
     * @param user - User entity
     * @return Collection of GrantedAuthority with ROLE_ prefix
     */
    private Collection<? extends GrantedAuthority> getAuthorities(User user) {
        String roleName = "ROLE_" + user.getRole().name();
        return Collections.singletonList(new SimpleGrantedAuthority(roleName));
    }
}
