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
/*
    @OneToMany(mappedBy = "respuestasComentarios")
    @JsonIgnore // https://www.baeldung.com/jackson-bidirectional-relationships-and-infinite-recursion
    private List<Comentario> respuestas;
*/
    @ManyToOne
    private Tema comentarioTema;

/*    @ManyToOne
    private Comentario respuestasComentario;
*/
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

    public int getRating() {
        return rating;
    }

    
    public void setRating(int rating) {
        this.rating = rating;
    }
/*
    public List<Comentario> getRespuestas() {
        return respuestas;
    }


    public void setRespuestas(List<Comentario> respuestas) {
        this.respuestas = respuestas;
    }
*/
    public Tema getComentarioTema() {
        return comentarioTema;
    }


    public void setComentarioTema(Tema comentarioTema) {
        this.comentarioTema = comentarioTema;
    }


}