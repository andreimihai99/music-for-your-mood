package com.app.musicforyourmoodbackend.controllers;

import com.app.musicforyourmoodbackend.entities.Listener;
import com.app.musicforyourmoodbackend.entities.Mood;
import com.app.musicforyourmoodbackend.repositories.MoodRepository;
import lombok.AllArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@AllArgsConstructor
@RequestMapping("/moods")
public class MoodController {

    private final MoodRepository moodRepository;

    @GetMapping("/get-all")
    public ResponseEntity<List<Mood>> getMoods() {
        try {
            List<Mood> moods = new ArrayList<Mood>();
            moods.addAll(moodRepository.findAll());

            if(moods.isEmpty())
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            else
                return ResponseEntity.ok(moods);

        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get-mood/{id}")
    public ResponseEntity<Mood> getMoodsById(@PathVariable Long id) {
        try {
            Optional<Mood> mood = moodRepository.findById(id);
            if(mood.isPresent()) {
                return ResponseEntity.ok(mood.get());
            } else
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get-mood-name/{name}")
    public ResponseEntity<Mood> getMoodByName(@PathVariable String name) {
        try {
            Optional<Mood> mood = Optional.ofNullable(moodRepository.findByName(name));
            if(mood.isPresent()) {
                return ResponseEntity.ok(mood.get());
            } else
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/add-mood")
    public ResponseEntity<Mood> addMood(@RequestBody Mood mood) {
        try {
            Mood _mood = moodRepository
                    .save(new Mood(
                            mood.getId(),
                            mood.getName(),
                            mood.getCoverImage()
                    ));
            return ResponseEntity.ok(_mood);

        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete-mood/{id}")
    public ResponseEntity<HttpStatus> deleteMood(@PathVariable("id") Long id) {
        try {
            moodRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
