package com.example.demo.controller;

import com.example.demo.dto.BoardRequest;
import com.example.demo.dto.BoardResponse;
import com.example.demo.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/boards")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class BoardController {
    private final BoardService boardService;

    @GetMapping
    public ResponseEntity<List<BoardResponse>> getAllBoards() {
        return ResponseEntity.ok(boardService.getAllBoards());
    }

    @GetMapping("/{id}")
    public ResponseEntity<BoardResponse> getBoard(@PathVariable Long id) {
        return ResponseEntity.ok(boardService.getBoard(id));
    }

    @PostMapping
    public ResponseEntity<BoardResponse> createBoard(
            @RequestHeader("X-USER-ID") Long userId,
            @RequestBody BoardRequest request) {
        return ResponseEntity.ok(boardService.createBoard(userId, request));
    }

    @PutMapping("/{id}")
    public ResponseEntity<BoardResponse> updateBoard(
            @PathVariable Long id,
            @RequestBody BoardRequest request) {
        return ResponseEntity.ok(boardService.updateBoard(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBoard(@PathVariable Long id) {
        boardService.deleteBoard(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/author/{userId}")
    public ResponseEntity<String> getAuthorName(@PathVariable Long userId) {
        return ResponseEntity.ok(boardService.getAuthorName(userId));
    }
} 