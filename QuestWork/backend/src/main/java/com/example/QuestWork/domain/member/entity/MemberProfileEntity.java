package com.example.QuestWork.domain.member.entity;

import com.example.QuestWork.domain.member.constant.MemberLevel;

import com.example.QuestWork.domain.user.entity.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Table(name = "member_profiles")
@Getter
@Setter
public class MemberProfileEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user; // UserEntity와 1:1 연결

    private String portfolioUrl;

    @Column(columnDefinition = "TEXT")
    private String intro; // 리액트의 bio 부분

    @Enumerated(EnumType.STRING)
    private MemberLevel level; // 리액트의 experienceLevel (BRONZE, SILVER 등)

    private int badgeCount;

    @Column(precision = 12, scale = 2)
    private BigDecimal totalReward; // 리액트의 totalEarnings (정밀한 계산을 위해 BigDecimal)

    private int totalCareerYears;

    // 기술 스택 목록과의 연결 (1:N)
    @OneToMany(mappedBy = "memberProfile")
    private List<MemberSkillTagEntity> skillTags;

//프로필 업데이트 석민이꺼
    public void updateProfile(String intro, MemberLevel level, String portfolioUrl, int totalCareerYears) {
        this.intro = intro;
        this.level = level;
        this.portfolioUrl = portfolioUrl;
        this.totalCareerYears = totalCareerYears;
    }
}