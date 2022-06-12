package com.ticket.ticket.dao;

import com.ticket.ticket.modelo.Persona;
import com.ticket.ticket.modelo.Tickete;
import lombok.AllArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
@AllArgsConstructor
public class PersonaDaoImp implements PersonaDao{
    private JdbcTemplate jdbcTemplate;

    @Override
    public void createPersona(Persona persona) {
        String consulta = "INSERT INTO persona "
                +"(numeroIdentificacionPersona, nombresYApellidos, correoElectronico, direccionResidencia, numeroTelefonico1, numeroTelefonico2) "
                +"values (?,?,?,?,?,?)";
        jdbcTemplate.update(consulta,
                persona.getNumeroIdentificacionPersona(),
                persona.getNombresYApellidos(),
                persona.getCorreoElectronico(),
                persona.getDireccionResidencia(),
                persona.getNumeroTelefonico1(),
                persona.getNumeroTelefonico2());
    }

    @Override
    public Persona readUnaPersonaPorNumeroIdentificacion(long numeroIdentificacionPersona) {
        String consulta = "SELECT * FROM persona WHERE numeroIdentificacionPersona = ?";
        return jdbcTemplate.queryForObject(consulta,
                new Object[]{numeroIdentificacionPersona},
                (rs, rowNum) -> new Persona(
                        rs.getLong("numeroIdentificacionPersona"),
                        rs.getString("nombresYApellidos"),
                        rs.getString("correoElectronico"),
                        rs.getString("direccionResidencia"),
                        rs.getString("numeroTelefonico1"),
                        rs.getString("numeroTelefonico2")));
    }

    @Override
    public boolean readUnaPersonaPorNumeroIdentificacionRetornaCuantosHay(long numeroIdentificacionPersona){
        String consulta = "SELECT COUNT(numeroIdentificacionPersona)"+
                "FROM persona WHERE numeroIdentificacionPersona = ?";
        int existe = jdbcTemplate.queryForObject(consulta,
                new Object[]{numeroIdentificacionPersona},
                Integer.class);
        return (existe >= 1);
    }

    @Override
    public List<Persona> readTodasLasPersonasEnBaseDatosDirecto() {
        String consulta = "SELECT * FROM persona";
        return jdbcTemplate.query(consulta,(rs, rowNum) ->
                new Persona(
                        rs.getLong("numeroIdentificacionPersona"),
                        rs.getString("nombresYApellidos"),
                        rs.getString("correoElectronico"),
                        rs.getString("direccionResidencia"),
                        rs.getString("numeroTelefonico1"),
                        rs.getString("numeroTelefonico2")));
    }

    @Override
    public int updatePersona(Persona persona) {
        String consulta = "UPDATE persona SET numeroIdentificacionPersona = ?, "
                +"nombresYApellidos = ?, correoElectronico = ?, direccionResidencia = ?, "
                +"numeroTelefonico1 = ?, numeroTelefonico2 = ? "
                +"WHERE numeroIdentificacionPersona = ?";
        return jdbcTemplate.update(consulta,
                persona.getNumeroIdentificacionPersona(),
                persona.getNombresYApellidos(),
                persona.getCorreoElectronico(),
                persona.getDireccionResidencia(),
                persona.getNumeroTelefonico1(),
                persona.getNumeroTelefonico2(),
                persona.getNumeroIdentificacionPersona());
    }
}
