package com.example.example2.service;

import com.example.example2.exceptions.NotFoundException;
import com.example.example2.model.Comentario;
import com.example.example2.model.ComentarioRepository;
import com.example.example2.model.Respuesta;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * ComentarioService
 */
@RestController
@RequestMapping("/public")
public class ComentarioService {

    @Autowired
    ComentarioRepository repository;

    @GetMapping("/comentarios")
    Iterable<Comentario> getComentarios() {
        return repository.findAll();
    }

    @GetMapping("/comentarios/{id}/respuestas")
    public Iterable<Respuesta> findAllRespuestas(@PathVariable("id") Long comentarioId) {
        // What happens if the company does not exist in the DB?
        return repository.findById(comentarioId).get().getRespuestas();
    }

    @GetMapping("/comentarios/{id}")
    Comentario findComentario(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Comentario no encontrado"));
    }

    @PostMapping("/comentarios")
    Comentario createComentario(@RequestBody Comentario comentario) {
        return repository.save(comentario);
    }

    @PutMapping("/comentarios/{id}")
    Comentario updateComentario(@PathVariable Long id, @RequestBody Comentario comentarioData) {

        Comentario comentario = findComentario(id);
        comentario.setContenido(comentarioData.getContenido());
        comentario.setFecha(comentarioData.getFecha());
        comentario.setRating(comentarioData.getRating());
       //comentario.setRespuestas(comentarioData.getRespuestas());
        //DEJAR ASI POR AHORA DESPUES VER SI SE COLOCAN MAS ATRIBUTOS AQUI
        // How to update the employer Company?

        return repository.save(comentario);
    }

    @DeleteMapping("/comentarios/{id}")
    void deleteComentario(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

}