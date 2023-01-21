package com.logicielPaie.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class CorsConfig {
    @Value("${allowed.origin}")
    private String allowedOrigin;

    public CorsConfig(String allowedOrigin) {
        this.allowedOrigin = allowedOrigin;
    }

    @Bean
    public WebMvcConfigurer getConfiguration() {

        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins(allowedOrigin)
                        .allowedMethods("GET", "POST", "PUT", "DELETE")
                        .allowedHeaders("(*");
            }
        };


    }
    }
