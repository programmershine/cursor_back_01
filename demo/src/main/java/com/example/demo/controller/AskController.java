package com.example.demo.controller;

import com.example.demo.dto.AskRequest;
import com.example.demo.dto.AskResponse;
import com.example.demo.service.AskService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/asks")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class AskController {
    private final AskService askService;

    @GetMapping
    public ResponseEntity<List<AskResponse>> getAllAsks() {
        return ResponseEntity.ok(askService.getAllAsks());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AskResponse> getAsk(@PathVariable Long id) {
        return ResponseEntity.ok(askService.getAsk(id));
    }

    @PostMapping
    public ResponseEntity<AskResponse> createAsk(@RequestBody AskRequest request) {
        return ResponseEntity.ok(askService.createAsk(request));
    }

    @PutMapping("/{id}")
    public ResponseEntity<AskResponse> updateAsk(
            @PathVariable Long id,
            @RequestBody AskRequest request) {
        return ResponseEntity.ok(askService.updateAsk(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAsk(@PathVariable Long id) {
        askService.deleteAsk(id);
        return ResponseEntity.ok().build();
    }
} 