package com.example.example2.service;

import com.example.example2.exceptions.NotFoundException;
import com.example.example2.model.Respuesta;
import com.example.example2.model.RespuestaRepository;

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
 * RespuestaService
 */
@RestController
@RequestMapping("/api")
public class RespuestaService {

    @Autowired
    RespuestaRepository repository;

    @GetMapping("/respuestas")
    Iterable<Respuesta> getRespuestas() {
        return repository.findAll();
    }

    @GetMapping("/respuestas/{id}")
    Respuesta findRespuesta(@PathVariable Long id) {
        return repository.findById(id).orElseThrow(() -> new NotFoundException("Respuesta no encontrado"));
    }

    @PostMapping("/respuestas")
    Respuesta createRespuesta(@RequestBody Respuesta respuesta) {
        return repository.save(respuesta);
    }

    @PutMapping("/respuestas/{id}")
    Respuesta updateRespuesta(@PathVariable Long id, @RequestBody Respuesta respuestaData) {

        Respuesta respuesta = findRespuesta(id);
        respuesta.setContenido(respuestaData.getContenido());
        respuesta.setFecha(respuestaData.getFecha());
        respuesta.setRating(respuestaData.getRating());

        // How to update the employer Company?

        return repository.save(respuesta);
    }

    @PutMapping("/respuestas/{id}/rating")
    Respuesta updateRespuestaRating(@PathVariable Long id, @RequestBody Respuesta respuestaData) {

        Respuesta respuesta = findRespuesta(id);
        respuesta.setRating(respuestaData.getRating());

        // How to update the employer Company?

        return repository.save(respuesta);
    }

    @DeleteMapping("/respuestas/{id}")
    void deleteComentario(@PathVariable Long id) {
        if (repository.existsById(id)) {
            repository.deleteById(id);
        } else {
            throw new NotFoundException();
        }
    }

}