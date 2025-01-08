package com.example.demo.dto;

import lombok.Builder;
import lombok.Getter;
import java.time.LocalDateTime;

@Getter
@Builder
public class AskResponse {
    private Long id;
    private String companyName;
    private String name;
    private String position;
    private String phone;
    private String email;
    private String content;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
} 