package com.example.backend.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class UserMongo implements UserDetails {

    public static UserMongo newUser(String username, String password, java.util.List<GrantedAuthority> authorities) {
        return UserMongo.builder()
                .username(username)
                .password(password)
                .authorities(authorities)
                .enabled(true)
                .accountNonExpired(true)
                .accountNonLocked(true)
                .credentialsNonExpired(true)
                .build();
    }

    @Id
    String username;
    String password;
    java.util.List<GrantedAuthority> authorities;
    boolean enabled;
    boolean accountNonExpired;
    boolean accountNonLocked;
    boolean credentialsNonExpired;

    java.util.List<ShoppingList> GroceryItems;
}


