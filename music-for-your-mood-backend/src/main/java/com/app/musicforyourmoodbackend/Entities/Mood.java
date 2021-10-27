package com.app.musicforyourmoodbackend.Entities;

import lombok.Data;

import javax.persistence.*;
import java.sql.Blob;

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
    private String cover_image;
}
