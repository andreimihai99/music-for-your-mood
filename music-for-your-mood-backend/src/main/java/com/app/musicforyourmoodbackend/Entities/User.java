package com.app.musicforyourmoodbackend.Entities;

import com.sun.istack.NotNull;
import liquibase.pro.packaged.N;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "user")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotNull
    @Column(name = "forename")
    private String forename;

    @Column(name = "surname")
    private String surname;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "is_admin")
    private Boolean isAdmin;

    @OneToMany(fetch = FetchType.LAZY)
    @JoinColumn(name = "liked_song_fk", referencedColumnName = "id", nullable = false)
    private List<Song> likedSongs;
}
