package com.springangular.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springangular.crud.model.Persona;

public interface PersonaRepository extends JpaRepository<Persona, Long>{
    
}
