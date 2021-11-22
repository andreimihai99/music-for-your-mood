package com.app.musicforyourmoodbackend.repositories;

import com.app.musicforyourmoodbackend.entities.Listener;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface ListenerRepository extends JpaRepository<Listener, Long> {
    Listener findByEmail(String email);
}
