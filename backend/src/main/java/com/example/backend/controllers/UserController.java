package com.example.backend.controllers;

import com.example.backend.services.MongoUserDetailsService;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.Collection;


@RestController
@RequestMapping("api")
public class UserController {

    private final MongoUserDetailsService mongoUserDetailsService;

    public UserController(MongoUserDetailsService mongoUserDetailsService) {
        this.mongoUserDetailsService = mongoUserDetailsService;
    }

    @GetMapping
    public String getUser(Principal principal) {
        String username = principal.getName();
        Collection<? extends GrantedAuthority> authorities =
                SecurityContextHolder.getContext().getAuthentication().getAuthorities();
        final boolean isAllowed =
                authorities.stream()
                        .anyMatch(g -> MongoUserDetailsService.AUTHORITY_API_READWRITE.equals(g.getAuthority()));
        if (isAllowed) {
            return "Hi " + username;
        } else {
            return "Access denied!";
        }
    }
}
