package com.springangular.crud.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Persona {
    @Id
    @Column
    private Long numDocumento;

    @Column
    private String nombre;

    @Column
    private String apellido;
    
    @Column
    private String correoElectronico;


}
