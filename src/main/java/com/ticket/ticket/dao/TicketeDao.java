package com.ticket.ticket.dao;

import com.ticket.ticket.modelo.Tickete;

import java.util.List;

public interface TicketeDao {
    void createTickete(Tickete tickete);
    Tickete readUnTicketePorIdTickete(int idTicket);
    List<Tickete> readTodosLosTicketesEnBaseDatosDirecto();
    int updateTickete(Tickete tickete);
}
