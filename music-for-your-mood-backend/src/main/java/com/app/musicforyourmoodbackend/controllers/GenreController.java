package com.app.musicforyourmoodbackend.controllers;

import com.app.musicforyourmoodbackend.entities.Genre;
import com.app.musicforyourmoodbackend.entities.Mood;
import com.app.musicforyourmoodbackend.repositories.GenreRespository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@AllArgsConstructor
@RequestMapping("/genres")
public class GenreController {

    private final GenreRespository genreRepository;

    @GetMapping("/get-all")
    public ResponseEntity<List<Genre>> getAllGenres() {
        try {
            List<Genre> genres = new ArrayList<Genre>();
            genres.addAll(genreRepository.findAll());

            if(genres.isEmpty())
                return new ResponseEntity(HttpStatus.NO_CONTENT);
            else
                return ResponseEntity.ok(genres);

        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get-genre/{id}")
    public ResponseEntity<Genre> getGenreById(@PathVariable Long id) {
        try {
            Optional<Genre> genre = genreRepository.findById(id);
            if(genre.isPresent()) {
                return ResponseEntity.ok(genre.get());
            } else
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/add-genre")
    public ResponseEntity<Genre> addMood(@RequestBody Genre genre) {
        try {
            Genre _genre = genreRepository
                    .save(new Genre(
                            genre.getId(),
                            genre.getName()
                    ));

            return ResponseEntity.ok(_genre);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
