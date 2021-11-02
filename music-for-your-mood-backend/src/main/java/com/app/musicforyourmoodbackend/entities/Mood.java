package com.app.musicforyourmoodbackend.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "mood")
@Data
public class Mood {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "cover_image", columnDefinition = "TEXT")
    @Lob
    private String coverImage;

    public Mood() {}

    public Mood(Long id, String name, String coverImage) {
        this.id = id;
        this.name = name;
        this.coverImage = coverImage;
    }
}
