package com.example.backend.controllers;

import com.example.backend.models.LoginData;
import com.example.backend.services.JWTUtils;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;

@RestController
@RequestMapping("auth")
public class LoginController {
    final AuthenticationManager authenticationManager;
    final JWTUtils jwtUtils;

    public LoginController(AuthenticationManager authenticationManager, JWTUtils jwtUtils) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginData data) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(data.getName(), data.getPassword())
            );
            return jwtUtils.createToken(new HashMap<>(), data.getName());
        } catch (AuthenticationException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "invalid credentials");
        }
    }
}