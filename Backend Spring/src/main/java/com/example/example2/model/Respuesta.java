package com.example.example2.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;


@Entity
public class Respuesta {

    @Id
    @GeneratedValue
    private Long id;

    private String fecha;
    private String contenido;
    private int rating;

    @ManyToOne
    private Comentario respuestasComentarios;



    public Long getId() {
        return id;
    }


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

    public Comentario getComentario() {
        return respuestasComentarios;
    }


    public void setComentario(Comentario resComentario) {
        this.respuestasComentarios = resComentario;
    }
}