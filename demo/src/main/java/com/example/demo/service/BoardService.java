package com.example.demo.service;

import com.example.demo.dto.BoardRequest;
import com.example.demo.dto.BoardResponse;
import com.example.demo.entity.Board;
import com.example.demo.entity.User;
import com.example.demo.repository.BoardRepository;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BoardService {
    private final BoardRepository boardRepository;
    private final UserRepository userRepository;

    @Transactional(readOnly = true)
    public List<BoardResponse> getAllBoards() {
        return boardRepository.findAll().stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public BoardResponse getBoard(Long id) {
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("게시글을 찾을 수 없습니다."));
        return convertToResponse(board);
    }

    @Transactional
    public BoardResponse createBoard(Long userId, BoardRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다."));

        Board board = Board.builder()
                .author(user)
                .content(request.getContent())
                .build();

        return convertToResponse(boardRepository.save(board));
    }

    @Transactional
    public BoardResponse updateBoard(Long id, BoardRequest request) {
        Board board = boardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("게시글을 찾을 수 없습니다."));
        
        board.setContent(request.getContent());
        return convertToResponse(boardRepository.save(board));
    }

    @Transactional
    public void deleteBoard(Long id) {
        boardRepository.deleteById(id);
    }

    public String getAuthorName(Long userId) {
        return userRepository.findById(userId)
                .map(User::getName)
                .orElseThrow(() -> new RuntimeException("사용자를 찾을 수 없습니다."));
    }

    private BoardResponse convertToResponse(Board board) {
        return BoardResponse.builder()
                .id(board.getId())
                .authorName(board.getAuthor().getName())
                .content(board.getContent())
                .createdAt(board.getCreatedAt())
                .updatedAt(board.getUpdatedAt())
                .build();
    }
} 