package com.example.example2.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Tema {

    @Id
    @GeneratedValue
    private Long id;

    private String fechaPublicacion;
    private String titulo;
    private String contenido;
    private int rating;
    private String tipoUsuario;

    @ManyToOne
    private Foro temaForo;


    @OneToMany(cascade = CascadeType.ALL, mappedBy = "comentarioTema", orphanRemoval = true)
    @JsonIgnore // https://www.baeldung.com/jackson-bidirectional-relationships-and-infinite-recursion
    private List<Comentario> comentarios;

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

    public String getFechaPublicacion() {
        return fechaPublicacion;
    }


    public void setFechaPublicacion(String fechaPublicacion) {
        this.fechaPublicacion = fechaPublicacion;
    }

    public String getTitulo() {
        return titulo;
    }


    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getContenido() {
        return contenido;
    }

    public String getTipoUsuario() {
        return tipoUsuario;
    }

    
    public void setTipoUsuario(String tipoUsuario) {
        this.tipoUsuario = tipoUsuario;
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

    public List<Comentario> getComentarios() {
        return comentarios;
    }


    public void setComentarios(List<Comentario> comentarios) {
        this.comentarios = comentarios;
    }

    public Foro getTemaForo() {
        return temaForo;
    }


    public void setTemaForo(Foro temaForo) {
        this.temaForo = temaForo;
    }
    
}