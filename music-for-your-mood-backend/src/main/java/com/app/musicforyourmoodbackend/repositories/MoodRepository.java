package com.app.musicforyourmoodbackend.repositories;

import com.app.musicforyourmoodbackend.entities.Mood;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MoodRepository extends JpaRepository<Mood, Long> {
}
