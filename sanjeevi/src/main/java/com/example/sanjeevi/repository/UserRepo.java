package com.example.sanjeevi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sanjeevi.model.User;



public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User>findByEmail(String email);
    
}
