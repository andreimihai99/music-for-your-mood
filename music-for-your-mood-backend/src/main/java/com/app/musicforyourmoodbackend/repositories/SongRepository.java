package com.app.musicforyourmoodbackend.repositories;

import com.app.musicforyourmoodbackend.entities.Song;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SongRepository extends JpaRepository<Song, Long> {
}
