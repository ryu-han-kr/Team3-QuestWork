package com.example.QuestWork.domain.user.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserSignupRequesetDto {
    private String username;
    private String password;
    private String email;
    private String nickname;
}
