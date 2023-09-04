package com.springangular.crud.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springangular.crud.model.Persona;
import com.springangular.crud.service.PersonaService;

@RestController
@RequestMapping("/persona")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:8080"})
public class PersonaController {
    @Autowired
    private PersonaService personaService;

    @PostMapping("/nuevo")
    public Persona newPersona(@RequestBody Persona newPersona){
        return this.personaService.newPerson(newPersona);
    }

    @GetMapping("/mostrar")
    public Iterable<Persona> getAll(){
        return personaService.getAll();
    }

    @PostMapping("/update")
    public Persona updatePerson(@RequestBody Persona persona){
        return this.personaService.modifyPerson(persona);
    }

    @PostMapping(value = "/{id}")
    public Boolean deletePersona(@PathVariable(value = "id") Long idPersona){
        return this.personaService.deletePerson(idPersona);
    }
}
