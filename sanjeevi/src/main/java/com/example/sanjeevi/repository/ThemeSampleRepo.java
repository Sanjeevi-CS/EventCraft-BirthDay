package com.example.sanjeevi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sanjeevi.model.ThemeSample;

public interface ThemeSampleRepo extends JpaRepository <ThemeSample , Integer> {
    
}
