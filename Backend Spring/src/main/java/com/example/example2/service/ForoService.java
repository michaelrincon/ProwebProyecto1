package com.example.example2.service;

import com.example.example2.exceptions.NotFoundException;
import com.example.example2.model.Foro;
import com.example.example2.model.ForoRepository;
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
 * ForoService
 */
@RestController
@RequestMapping("/public")
public class ForoService {

    @Autowired
    ForoRepository repository;

    @GetMapping("/foros")
    Iterable<Foro> getForos() {
        return repository.findAll();
    }

    @GetMapping("/foros/{id}/temas")
    public Iterable<Tema> findAllTemas(@PathVariable("id") Long foroId) {
        // What happens if the company does not exist in the DB?
        return repository.findById(foroId).get().getTemas();
    }

    @GetMapping("/foros/{id}")
    Foro findForo(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Foro no encontrado"));
    }

    @PostMapping("/foros")
    Foro createForo(@RequestBody Foro foro) {
        return repository.save(foro);
    }

    @PutMapping("/foros/{id}")
    Foro updateForo(@PathVariable Long id, @RequestBody Foro foroData) {

        Foro foro = findForo(id);
        foro.setModerado(foroData.getModerado());
        //DEJAR ASI POR AHORA DESPUES VER SI SE COLOCAN MAS ATRIBUTOS AQUI
        // How to update the employer Company?

        return repository.save(foro);
    }

    @DeleteMapping("/foros/{id}")
    void deleteForos(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

}