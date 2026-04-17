package com.example.QuestWork.domain.user.entity;

import com.example.QuestWork.domain.user.constant.AuthProvider;
import com.example.QuestWork.domain.user.constant.UserStatus;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name="users")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; //big int

    @Column(nullable = false, length = 50)
    private String username; // varchar(50) NN

    @Column(length = 255)
    private String password; // varchar(255)

    @Column(nullable = false, length=100, unique = true)
    private String email;

    @Column(nullable = false, length=50)
    private String nickname;

    @Column(length=255)
    private String profile_image_url;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length=20)
    private AuthProvider provider; // (local, kakao, naver, google)

    @Column(length=100)
    private String provider_id;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, length = 20)
    private UserStatus status;

    @CreationTimestamp
    @Column(name= "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @UpdateTimestamp
    @Column(name= "updated_at", nullable = false, updatable = true)
    private LocalDateTime updatedAt;

}
