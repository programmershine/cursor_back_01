package com.example.demo.dto;

import lombok.Data;

@Data
public class SignupRequest {
    private String userId;
    private String password;
    private String phone;
} 