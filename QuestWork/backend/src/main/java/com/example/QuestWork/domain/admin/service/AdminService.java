package com.example.QuestWork.domain.admin.service;


import com.example.QuestWork.domain.user.constant.UserStatus;
import com.example.QuestWork.domain.user.entity.User;
import com.example.QuestWork.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class AdminService {
    private final UserRepository userRepository;

    // 두 번째 인자를 Enum 타입인 UserStatus로 직접 받습니다.
    public void updateUserStatus(Long userId, UserStatus status) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("해당 유저를 찾을 수 없습니다."));

        // status는 이미 Enum이므로 .getStatus()를 호출할 필요가 없습니다.
        user.changeStatus(status);

        // 3. repository.save()를 부르지 않아도 메서드 종료 시(트랜잭션 끝) DB 반영!
    }
}