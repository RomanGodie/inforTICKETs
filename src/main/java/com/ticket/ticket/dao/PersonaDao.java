package com.ticket.ticket.dao;

import com.ticket.ticket.modelo.Persona;

public interface PersonaDao {
    void createPersona(Persona persona);
    Persona readUnaPersonaPorNumeroIdentificacion(int numeroIdentificacionPersona);
    boolean readUnaPersonaPorNumeroIdentificacionRetornaCuantosHay(int numeroIdentificacionPersona);
    int updatePersona(Persona persona);
}
