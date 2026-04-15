package com.example.QuestWork.user;

import com.example.QuestWork.user.constant.UserStatus;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.time.LocalDateTime;

@Entity
@Table(name = "users")
@Getter
@Setter
@ToString
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // MySQL AUTO_INCREMENT 매핑
    private Long id; // bigint에 맞춰 Long으로 변경

    @Column(unique = true, nullable = false)
    private String username; // 쿼리문의 username과 매칭

    private String password; // int에서 String으로 변경

    @Column(unique = true, nullable = false)
    private String email;

    private String nickname;

    @Column(name = "profile_image_url")
    private String profileImageUrl;

    private String provider; // LOCAL, KAKAO 등

    @Column(name = "provider_id")
    private String providerId;

    @Enumerated(EnumType.STRING)
    private UserStatus status;

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
}
