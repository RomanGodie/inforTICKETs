package com.ticket.ticket.controlador;

import com.ticket.ticket.dao.PersonaDao;
import com.ticket.ticket.dao.TicketeDao;
import com.ticket.ticket.modelo.Persona;
import com.ticket.ticket.modelo.Tickete;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
public class ControladorTicket {

    @Autowired
    private PersonaDao personaDao;
    @Autowired
    private TicketeDao ticketeDao;

    @RequestMapping(value = "persona/{numeroIdentificacionPersona}", method = RequestMethod.GET)
    public Persona getPersona(@PathVariable int numeroIdentificacionPersona){
        return personaDao.readUnaPersonaPorNumeroIdentificacion(numeroIdentificacionPersona);
    }

    @RequestMapping(value = "actualizarPersona", method = RequestMethod.POST)
    public void setPersona(@RequestBody Persona persona){
        int personaActualizada = personaDao.updatePersona(persona);
    }

    @RequestMapping(value = "ticket/{idTicket}")
    public Tickete getTickete(@PathVariable int idTicket){
        return ticketeDao.readUnTicketePorIdTickete(idTicket);
    }

    @RequestMapping(value = "actualizarTickete")
    public void setTickete(@RequestBody Tickete tickete){
        int ticketeActualizado = ticketeDao.updateTickete(tickete);
    }

    @RequestMapping(value = "tickets")
    public List<Tickete> getTickets(){
        return ticketeDao.readTodosLosTicketesEnBaseDatosDirecto();
    }
}
