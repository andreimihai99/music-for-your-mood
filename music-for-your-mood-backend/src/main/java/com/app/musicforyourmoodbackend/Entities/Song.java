package com.app.musicforyourmoodbackend.Entities;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

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
    private Integer duration;

    @Column(name = "listenLink")
    private String listenLink;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "genre_fk", referencedColumnName = "id", nullable = false)
    private Genre genre;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "mood_fk", referencedColumnName = "id", nullable = false)
    private Mood mood;


}
