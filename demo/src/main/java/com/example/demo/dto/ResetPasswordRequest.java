package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class ResetPasswordRequest {
    private String userId;
    private String passwordHint;
    private String passwordHintAnswer;
    private String newPassword;
} 