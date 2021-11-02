package com.app.musicforyourmoodbackend.entities;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "listener")
@Data
public class Listener {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

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

    public Listener() {}

    public Listener(Long id, String forename, String surname, String password, String email, Boolean isAdmin) {
        this.id = id;
        this.forename = forename;
        this.surname = surname;
        this.password = password;
        this.email = email;
        this.isAdmin = isAdmin;
    }
}
