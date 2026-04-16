package com.example.QuestWork.domain.admin.controller;


import com.example.QuestWork.domain.admin.service.AdminService;
import com.example.QuestWork.domain.user.constant.UserStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    /**
     * 회원 상태 변경 (정지, 활성화, 탈퇴 등)
     * PATCH http://localhost:8000/api/admin/users/4/status
     */
    @PatchMapping("/users/{userId}/status")
    public ResponseEntity<String> updateUserStatus(
            @PathVariable("userId") Long userId,
            @RequestBody UserStatus status) { // JSON 값이 Enum으로 자동 매핑됨

        adminService.updateUserStatus(userId, status);

        return ResponseEntity.ok("유저(ID: " + userId + ")의 상태가 " + status + "로 변경되었습니다.");
    }
}