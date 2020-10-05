package com.example.example2.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Comentario {

    @Id
    @GeneratedValue
    private Long id;

    private String fecha;
    private String contenido;
    private int rating;
    private String tipoUsuario;

    @ManyToOne
    private Tema comentarioTema;

    @OneToMany(mappedBy = "comentarioResp")
    @JsonIgnore // https://www.baeldung.com/jackson-bidirectional-relationships-and-infinite-recursion
    private List<Respuesta> respuestas;



    /**
     * @return the id
     */
    public Long getId() {
        return id;
    }

    /**
     * @param id the id to set
     */
    public void setId(Long id) {
        this.id = id;
    }

    
    public String getFecha() {
        return fecha;
    }

    
    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getContenido() {
        return contenido;
    }

    
    public void setContenido(String contenido) {
        this.contenido = contenido;
    }

    public String getTipoUsuario() {
        return tipoUsuario;
    }

    
    public void setTipoUsuario(String tipoUsuario) {
        this.tipoUsuario = tipoUsuario;
    }

    public int getRating() {
        return rating;
    }

    
    public void setRating(int rating) {
        this.rating = rating;
    }

    public List<Respuesta> getRespuestas() {
        return respuestas;
    }


    public void setRespuestas(List<Respuesta> respuestas) {
        this.respuestas = respuestas;
    }

    public Tema getComentarioTema() {
        return comentarioTema;
    }


    public void setComentarioTema(Tema comentarioTema) {
        this.comentarioTema = comentarioTema;
    }


}