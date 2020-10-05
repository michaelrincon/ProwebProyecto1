package com.example.example2.service;

import com.example.example2.exceptions.NotFoundException;
import com.example.example2.model.Comentario;
import com.example.example2.model.TemaRepository;
import com.example.example2.model.Tema;

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
 * TemaService
 */
@RestController
@RequestMapping("/api")
public class TemaService {

    @Autowired
    TemaRepository repository;

    @GetMapping("/temas")
    Iterable<Tema> getTemas() {
        return repository.findAll();
    }

    @GetMapping("/temas/{id}/comentarios")
    public Iterable<Comentario> findAllComentarios(@PathVariable("id") Long temaId) {
        // What happens if the company does not exist in the DB?
        return repository.findById(temaId).get().getComentarios();
    }

    @GetMapping("/temas/{id}")
    Tema findTema(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Tema no encontrado"));
    }

    @PostMapping("/temas")
    Tema createTema(@RequestBody Tema tema) {
        return repository.save(tema);
    }

    @PutMapping("/temas/{id}")
    Tema updateTema(@PathVariable Long id, @RequestBody Tema temaData) {

        Tema tema = findTema(id);
        tema.setContenido(temaData.getContenido());
        tema.setFechaPublicacion(temaData.getFechaPublicacion());
        tema.setRating(temaData.getRating());
        tema.setTitulo(temaData.getTitulo());

        //DEJAR ASI POR AHORA DESPUES VER SI SE COLOCAN MAS ATRIBUTOS AQUI
        // How to update the employer Company?

        return repository.save(tema);
    }

    @PutMapping("/temas/{id}/rating")
    Tema updateTemaRating(@PathVariable Long id, @RequestBody Tema temaData) {

        Tema tema = findTema(id);
        tema.setRating(temaData.getRating());

        //DEJAR ASI POR AHORA DESPUES VER SI SE COLOCAN MAS ATRIBUTOS AQUI
        // How to update the employer Company?

        return repository.save(tema);
    }

    @DeleteMapping("/temas/{id}")
    void deleteTemas(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

}