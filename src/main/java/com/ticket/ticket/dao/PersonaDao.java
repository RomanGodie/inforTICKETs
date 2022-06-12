package com.ticket.ticket.dao;

import com.ticket.ticket.modelo.Persona;

import java.util.List;

public interface PersonaDao {
    void createPersona(Persona persona);
    Persona readUnaPersonaPorNumeroIdentificacion(long numeroIdentificacionPersona);
    boolean readUnaPersonaPorNumeroIdentificacionRetornaCuantosHay(long numeroIdentificacionPersona);
    List<Persona> readTodasLasPersonasEnBaseDatosDirecto();
    int updatePersona(Persona persona);
}
