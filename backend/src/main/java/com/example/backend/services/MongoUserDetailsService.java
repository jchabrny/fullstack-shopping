package com.example.backend.services;

import com.example.backend.repositories.MongoUserRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class MongoUserDetailsService implements UserDetailsService {

    public static final String AUTHORITY_API_READWRITE = "API_READWRITE";

    private final MongoUserRepository userRepository;

    public MongoUserDetailsService(MongoUserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(("User " + username + " not found ...")));
    }
}

