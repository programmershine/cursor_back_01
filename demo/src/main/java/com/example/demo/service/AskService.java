package com.example.demo.service;

import com.example.demo.dto.AskRequest;
import com.example.demo.dto.AskResponse;
import com.example.demo.entity.Ask;
import com.example.demo.repository.AskRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AskService {
    private final AskRepository askRepository;

    @Transactional(readOnly = true)
    public List<AskResponse> getAllAsks() {
        return askRepository.findAll().stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public AskResponse getAsk(Long id) {
        Ask ask = askRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("문의를 찾을 수 없습니다."));
        return convertToResponse(ask);
    }

    @Transactional
    public AskResponse createAsk(AskRequest request) {
        Ask ask = Ask.builder()
                .companyName(request.getCompanyName())
                .name(request.getName())
                .position(request.getPosition())
                .phone(request.getPhone())
                .email(request.getEmail())
                .content(request.getContent())
                .build();

        return convertToResponse(askRepository.save(ask));
    }

    @Transactional
    public AskResponse updateAsk(Long id, AskRequest request) {
        Ask ask = askRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("문의를 찾을 수 없습니다."));
        
        ask.setCompanyName(request.getCompanyName());
        ask.setName(request.getName());
        ask.setPosition(request.getPosition());
        ask.setPhone(request.getPhone());
        ask.setEmail(request.getEmail());
        ask.setContent(request.getContent());
        
        return convertToResponse(askRepository.save(ask));
    }

    @Transactional
    public void deleteAsk(Long id) {
        askRepository.deleteById(id);
    }

    private AskResponse convertToResponse(Ask ask) {
        return AskResponse.builder()
                .id(ask.getId())
                .companyName(ask.getCompanyName())
                .name(ask.getName())
                .position(ask.getPosition())
                .phone(ask.getPhone())
                .email(ask.getEmail())
                .content(ask.getContent())
                .createdAt(ask.getCreatedAt())
                .updatedAt(ask.getUpdatedAt())
                .build();
    }
} 