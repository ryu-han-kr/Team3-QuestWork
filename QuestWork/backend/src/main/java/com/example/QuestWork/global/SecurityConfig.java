package com.example.QuestWork.global;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable()) // 테스트를 위해 CSRF 비활성화 (선택 사항)
                .authorizeHttpRequests(auth -> auth
//                        .requestMatchers("/").permitAll() // 메인 페이지는 누구나 접근 가능
//                        .anyRequest().authenticated() // 기본 로그인 폼 사용
                                .anyRequest().permitAll()
                )
                .formLogin(withDefaults()); // 기본 로그인 폼 사용
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
