package com.example.sanjeevi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sanjeevi.model.ThemeModal;

public interface ThemeRepo extends JpaRepository<ThemeModal, Integer>{

    // void save(String theme);
    
}
