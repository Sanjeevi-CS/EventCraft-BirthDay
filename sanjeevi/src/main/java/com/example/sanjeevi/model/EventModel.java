package com.example.sanjeevi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.hibernate.mapping.Join;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class EventModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int eventId;
    private String eventName;
    private int attendees;
    private String eventDate;
    private String eventTime;
    @ManyToOne
    @JoinColumn (name="theme_id")
    // @JsonIgnore
    private ThemeModal eventTheme;
    @ManyToOne
    // @JsonIgnore
    private UserModel userModel;
}
