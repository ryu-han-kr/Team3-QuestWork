package com.example.QuestWork.domain.user.controller;

import com.example.QuestWork.domain.user.dto.UserSignupRequesetDto;
import com.example.QuestWork.domain.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor

public class AuthController {

    private final UserService userservice;

    // 실제 입력이 들어오는 주소(3000:/api/auth/signup)
    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody UserSignupRequesetDto dto) {
        //@RequestBody: 프론트에서 보낸 json data를 DTO 객체로 변환해서 받음

        userservice.signup(dto);

        return ResponseEntity.ok("회원 가입 성공");
    }


}
