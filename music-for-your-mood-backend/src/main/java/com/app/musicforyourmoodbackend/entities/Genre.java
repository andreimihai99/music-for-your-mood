package com.app.musicforyourmoodbackend.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "genre")
@Data
public class Genre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    public Genre() {}

    public Genre(Long id, String name) {
        this.id = id;
        this.name = name;
    }
}
