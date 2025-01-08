package com.example.demo.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class AskRequest {
    private String companyName;
    private String name;
    private String position;
    private String phone;
    private String email;
    private String content;
} 