package com.example.QuestWork.member.repository;

import com.example.QuestWork.member.entity.MemberProfileEntity;
import org.springframework.data.jpa.repository.JpaRepository;


public interface MemberProfileRepository extends JpaRepository<MemberProfileEntity,Long> {
}
