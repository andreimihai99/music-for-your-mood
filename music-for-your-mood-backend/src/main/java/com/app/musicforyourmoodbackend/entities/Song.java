package com.app.musicforyourmoodbackend.entities;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

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
    @OnDelete(action = OnDeleteAction.CASCADE)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mood_id", referencedColumnName = "id", nullable = false)
    private Mood mood;

    public Song() {}

    @JsonCreator
    public Song(@JsonProperty("id") Long id, @JsonProperty("genre") Genre genre, @JsonProperty("mood") Mood mood,
                @JsonProperty("artist") String artist, @JsonProperty("duration") String duration,
                @JsonProperty("listenLink") String listenLink, @JsonProperty("title") String title) {
        this.id = id;
        this.genre = genre;
        this.mood = mood;
        this.artist = artist;
        this.duration = duration;
        this.listenLink = listenLink;
        this.title = title;
    }
}
