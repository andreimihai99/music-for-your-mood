package com.app.musicforyourmoodbackend.repositories;

import com.app.musicforyourmoodbackend.entities.Mood;
import com.app.musicforyourmoodbackend.entities.Song;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface SongRepository extends JpaRepository<Song, Long> {
    Song findByTitleAndArtist(String title, String artist);
    List<Song> findByMood(Optional<Mood> moodId);
}
