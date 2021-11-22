package com.app.musicforyourmoodbackend.controllers;


import com.app.musicforyourmoodbackend.entities.Listener;
import com.app.musicforyourmoodbackend.repositories.ListenerRepository;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@AllArgsConstructor
@RequestMapping("/listeners")
public class ListenerController {

    private final ListenerRepository listenerRepository;

    @GetMapping("/get-all")
    public ResponseEntity<List<Listener>> getAllUsers() {
        try {
            List<Listener> listeners = new ArrayList<Listener>();
            listeners.addAll(listenerRepository.findAll());

            if(listeners.isEmpty())
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);

            return ResponseEntity.ok(listeners);
        }
        catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get-listener/{id}")
    public ResponseEntity<Listener> getListenerById(@PathVariable Long id) {
        try {
            Optional<Listener> listener = listenerRepository.findById(id);
            if(listener.isPresent()) {
                return ResponseEntity.ok(listener.get());
            } else
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get-by-email/{email}")
    public ResponseEntity<Listener> getListenerByEmail(@PathVariable String email) {
        try {
            Optional<Listener> listener = Optional.ofNullable(listenerRepository.findByEmail(email));
            if(listener.isPresent()) {
                return ResponseEntity.ok(listener.get());
            } else
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        }
        catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/create-listener")
    public ResponseEntity<Listener> createListener(@RequestBody Listener listener) {
        try {
            Listener _listener = listenerRepository
                    .save(new Listener(
                            listener.getId(),
                            listener.getForename(),
                            listener.getSurname(),
                            listener.getEmail(),
                            listener.getPassword(),
                            listener.getIsAdmin()));

            return new ResponseEntity<>(_listener, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
