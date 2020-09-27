package com.example.example2.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Foro {

    @Id
    @GeneratedValue
    private Long id;

    private Boolean moderado;

    @OneToMany(mappedBy = "temaForo")
    @JsonIgnore // https://www.baeldung.com/jackson-bidirectional-relationships-and-infinite-recursion
    private List<Tema> temas;


    public Long getId() {
        return id;
    }


    public void setId(Long id) {
        this.id = id;
    }

    public boolean getModerado(){
        return moderado;
    }

    public void setModerado(boolean moderado){
        this.moderado = moderado;
    }


    public List<Tema> getTemas() {
        return temas;
    }


    public void setTemas(List<Tema> temas) {
        this.temas = temas;
    }
}