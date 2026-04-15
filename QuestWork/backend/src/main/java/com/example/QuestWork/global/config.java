package com.example.QuestWork.global;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class config implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // 모든 경로에 대해
                .allowedOrigins("http://localhost:3000")
                .allowedHeaders("http://localhost:5173")
                .allowedHeaders("http://localhost:8000")
                //.allowedOriginPatterns("*") // 혹시 몰라 넣어둔 편법, 모든 종류의 도메인을 다 ok 해줌
                .allowedMethods("GET", "POST", "PUT", "UPDATE", "DELETE", "PATCH", "OPTIONS")
                .allowedHeaders("*") // 모든 종류의 http 헤더를 허용, Content-type, Authorization 등
                .allowCredentials(true); // 모든 종류의 인증방식이든 사용할 수있게 해줌 JWT, session, cookies 등
    }
}
