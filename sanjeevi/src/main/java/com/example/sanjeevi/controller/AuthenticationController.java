package com.example.sanjeevi.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sanjeevi.dto.request.AuthenticationRequest;
import com.example.sanjeevi.dto.request.RegisterRequest;
import com.example.sanjeevi.dto.response.AuthenticationResponse;
import com.example.sanjeevi.model.User;
import com.example.sanjeevi.model.UserModel;
import com.example.sanjeevi.service.impl.AuthenticationService;
import com.example.sanjeevi.service.impl.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    private final UserService userService;
     @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }

    @GetMapping("/getuser/{email}")
    public ResponseEntity<User> getUser(@PathVariable String email){
        return ResponseEntity.ok(userService.getUser(email).get());
    }
    
}
