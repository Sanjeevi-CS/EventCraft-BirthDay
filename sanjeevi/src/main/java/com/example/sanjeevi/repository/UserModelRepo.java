package com.example.sanjeevi.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sanjeevi.model.User;
import com.example.sanjeevi.model.UserModel;

public interface UserModelRepo extends JpaRepository<UserModel,Integer> {
     Optional<UserModel> findByUser(User user);
    Optional<UserModel> findByUserEmail(String email);
}
