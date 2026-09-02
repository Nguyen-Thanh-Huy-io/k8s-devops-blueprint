package com.unejsi.springbootecommerce.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
class SecurityConfiguration {

    @Bean
    SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .authorizeHttpRequests(requests -> requests
                        // Cho phép Prometheus và K8s health check truy cập công khai
                        .requestMatchers("/actuator/**").permitAll()
                        // Yêu cầu xác thực JWT cho API đơn hàng
                        .requestMatchers("/api/orders/**").authenticated()
                        // Các API còn lại mở công khai
                        .anyRequest().permitAll())
                .oauth2ResourceServer(oauth2 -> oauth2.jwt(withDefaults()))
                .cors(withDefaults())
                .csrf(csrf -> csrf.disable())
                .build();
    }
}