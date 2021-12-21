package com.app.musicforyourmoodbackend.controllers;

import com.app.musicforyourmoodbackend.entities.Mood;
import com.app.musicforyourmoodbackend.entities.Song;
import com.app.musicforyourmoodbackend.repositories.MoodRepository;
import com.app.musicforyourmoodbackend.repositories.SongRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@AllArgsConstructor
@RequestMapping("/songs")
public class SongController {

    private final SongRepository songRepository;
    private final MoodRepository moodRepository;

    @GetMapping("/get-all")
    public ResponseEntity<List<Song>> getAllSongs() {
        try {
            List<Song> songs = new ArrayList<Song>();
            songs.addAll(songRepository.findAll());
            if(songs.isEmpty())
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);

            return ResponseEntity.ok(songs);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get-all-by-mood-id/{moodId}")
    public ResponseEntity<List<Song>> getAllSongByMood(@PathVariable Long moodId) {
        try {
            List<Song> songs = songRepository.findByMood(moodRepository.findById(moodId));
            if(songs.isEmpty())
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            else
                return ResponseEntity.ok(songs);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get-song/{id}")
    public ResponseEntity<Song> getSongById(@PathVariable Long id) {
        try {
            Optional<Song> song = songRepository.findById(id);
            if(song.isPresent())
                return ResponseEntity.ok(song.get());
            else
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get-song-title-artist/{title}/{artist}")
    public ResponseEntity<Song> getSongByTitleAndArtist(@PathVariable String title, @PathVariable String artist) {
        try {
            Optional<Song> song = Optional.ofNullable(songRepository.findByTitleAndArtist(title, artist));
            if(song.isPresent())
                return ResponseEntity.ok(song.get());
            else
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/add-song")
    public ResponseEntity<Song> addSong(@RequestBody Song song) {
        try {
            Song _song = songRepository
                    .save(new Song(
                            song.getId(),
                            song.getGenre(),
                            song.getMood(),
                            song.getArtist(),
                            song.getDuration(),
                            song.getListenLink(),
                            song.getTitle()
                    ));
            return ResponseEntity.ok(_song);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete-song/{id}")
    public ResponseEntity<HttpStatus> deleteMood(@PathVariable("id") Long id) {
        try {
            songRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
