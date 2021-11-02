package com.app.musicforyourmoodbackend.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "song")
@Data
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "artist")
    private String artist;

    @Column(name = "duration")
    private String duration;

    @Column(name = "listen_link")
    private String listenLink;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "genre_id", referencedColumnName = "id", nullable = false)
    private Genre genre;

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mood_id", referencedColumnName = "id", nullable = false)
    private Mood mood;

    public Song() {}

    public Song(Long id, Genre genre, Mood mood, String artist, String duration, String listenLink, String title) {
        this.id = id;
        this.genre = genre;
        this.mood = mood;
        this.artist = artist;
        this.duration = duration;
        this.listenLink = listenLink;
        this.title = title;
    }
}
