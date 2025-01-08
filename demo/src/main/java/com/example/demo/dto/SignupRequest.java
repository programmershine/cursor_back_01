package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class SignupRequest {
    private String userId;
    private String password;
    private String name;
    private String phone;
    private String email;
    private String zipCode;
    private String address;
    private String addressDetail;
    private String passwordHint;
    private String passwordHintAnswer;
} 