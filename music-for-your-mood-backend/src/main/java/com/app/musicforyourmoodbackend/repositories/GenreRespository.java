package com.app.musicforyourmoodbackend.repositories;

import com.app.musicforyourmoodbackend.entities.Genre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GenreRespository extends JpaRepository<Genre, Long> {
}
