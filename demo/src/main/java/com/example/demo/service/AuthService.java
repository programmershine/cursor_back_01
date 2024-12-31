package com.example.demo.service;

import com.example.demo.dto.AuthResponse;
import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.SignupRequest;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public AuthResponse signup(SignupRequest request) {
        System.out.println("Received signup request: " + request);
        
        if (request.getUserId() == null || request.getPassword() == null || request.getPhone() == null) {
            throw new RuntimeException("UserId, password and phone are required");
        }

        if (userRepository.existsByUserId(request.getUserId())) {
            throw new RuntimeException("UserId already exists");
        }

        User user = User.builder()
                .userId(request.getUserId())
                .password(passwordEncoder.encode(request.getPassword()))
                .phone(request.getPhone())
                .build();

        User savedUser = userRepository.save(user);
        System.out.println("User saved successfully: " + savedUser);

        String token = jwtUtil.generateToken(user.getUserId());
        return new AuthResponse(token);
    }

    public AuthResponse login(LoginRequest request) {
        System.out.println("Received login request: " + request);
        
        if (request.getUserId() == null || request.getPassword() == null) {
            throw new RuntimeException("UserId and password are required");
        }

        User user = userRepository.findByUserId(request.getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        System.out.println("Found user: " + user);

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        String token = jwtUtil.generateToken(user.getUserId());
        return new AuthResponse(token);
    }
} 