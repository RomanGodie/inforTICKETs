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

    @RequestMapping(value = "nuevaPersona")
    public void crearUnaPersona(@RequestBody Persona persona){

    }

    @RequestMapping(value = "nuevoTicket")
    public void crearUnTicket(@RequestBody Tickete tickete){

    }

    @RequestMapping(value = "persona/{numeroIdentificacionPersona}", method = RequestMethod.GET)
    public Persona obtenerUnaPersona(@PathVariable int numeroIdentificacionPersona){
        return (personaDao.readUnaPersonaPorNumeroIdentificacionRetornaCuantosHay(numeroIdentificacionPersona))?
                (personaDao.readUnaPersonaPorNumeroIdentificacion(numeroIdentificacionPersona)):null;
    }

    @RequestMapping(value = "ticket/{idTicket}")
    public Tickete obtenerUnTickete(@PathVariable int idTicket){
        return ticketeDao.readUnTicketePorIdTickete(idTicket);
    }

    @RequestMapping(value = "tickets")
    public List<Tickete> obtenerTodosLosTickets(){
        return ticketeDao.readTodosLosTicketesEnBaseDatosDirecto();
    }

    @RequestMapping(value = "actualizarPersona", method = RequestMethod.POST)
    public void actualizarPersona(@RequestBody Persona persona){
        int personaActualizada = personaDao.updatePersona(persona);
    }

    @RequestMapping(value = "actualizarTickete")
    public void actualizarTickete(@RequestBody Tickete tickete){
        int ticketeActualizado = ticketeDao.updateTickete(tickete);
    }
}
