package com.springangular.crud.service;

import org.springframework.stereotype.Service;

import com.springangular.crud.model.Persona;

@Service
public interface PersonaService {
    Persona newPerson(Persona newPerson);

    Iterable<Persona> getAll();

    Persona modifyPerson(Persona persona);

    Boolean deletePerson(Long idPersona);
}
