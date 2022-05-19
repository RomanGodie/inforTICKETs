package com.ticket.ticket.dao;

import com.ticket.ticket.modelo.Tickete;
import lombok.AllArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
@AllArgsConstructor
public class TicketeDaoImp implements TicketeDao{

    private JdbcTemplate jdbcTemplate;

    @Override
    public void createTickete(Tickete tickete) {
        String consulta = "INSERT INTO tickete "
                +"(numeroIdentificacionPersona2, tituloServicio, descripcionServicio, "
                +"fechaIngreso, nivelPrioridad, descripcionSolucion, estadoTicket, notaAdjunta, fechaUltimaActualizacion, "
                +"valorServicio) values (?,?,?,?,?,?,?,?,?)";
        jdbcTemplate.update(consulta,
                tickete.getNumeroIdentificacionPersona2(),
                tickete.getTituloServicio(),
                tickete.getDescripcionServicio(),
                tickete.getFechaIngreso(),
                tickete.getNivelPrioridad(),
                tickete.getDescripcionSolucion(),
                tickete.getEstadoTicket(),
                tickete.getNotaAdjunta(),
                tickete.getFechaUltimaActualizacion(),
                tickete.getValorServicio());
    }

    @Override
    public Tickete readUnTicketePorIdTickete(int idTicket) {
        String consulta = "SELECT * FROM tickete WHERE idTicket = ?";
        return jdbcTemplate.queryForObject(consulta,
                new Object[]{idTicket},
                (rs, rowNum) -> new Tickete(
                        rs.getInt("idTicket"),
                        rs.getInt("numeroIdentificacionPersona2"),
                        rs.getString("tituloServicio"),
                        rs.getString("descripcionServicio"),
                        rs.getString("fechaIngreso"),
                        rs.getString("nivelPrioridad"),
                        rs.getString("descripcionSolucion"),
                        rs.getString("estadoTicket"),
                        rs.getString("notaAdjunta"),
                        rs.getString("fechaUltimaActualizacion"),
                        rs.getInt("valorServicio")));
    }

    @Override
    public List<Tickete> readTodosLosTicketesEnBaseDatosDirecto() {
        String consulta = "SELECT * FROM tickete";
        return jdbcTemplate.query(consulta,(rs, rowNum) ->
                new Tickete(
                        rs.getInt("idTicket"),
                        rs.getInt("numeroIdentificacionPersona2"),
                        rs.getString("tituloServicio"),
                        rs.getString("descripcionServicio"),
                        rs.getString("fechaIngreso"),
                        rs.getString("nivelPrioridad"),
                        rs.getString("descripcionSolucion"),
                        rs.getString("estadoTicket"),
                        rs.getString("notaAdjunta"),
                        rs.getString("fechaUltimaActualizacion"),
                        rs.getInt("valorServicio")));
    }

    @Override
    public int updateTickete(Tickete tickete) {
        String consulta = "UPDATE tickete SET "
                +"tituloServicio = ?, descripcionServicio = ? "
                +"nivelPrioridad = ?, descripcionSolucion = ?, estadoTicket = ?, "
                +"notaAdjunta = ?, fechaUltimaActualizacion = ?, valorServicio = ? "
                +"WHERE idTicket = ?";
        return jdbcTemplate.update(consulta,
                tickete.getTituloServicio(),
                tickete.getDescripcionServicio(),
                tickete.getNivelPrioridad(),
                tickete.getDescripcionSolucion(),
                tickete.getEstadoTicket(),
                tickete.getNotaAdjunta(),
                tickete.getFechaUltimaActualizacion(),
                tickete.getValorServicio(),
                tickete.getIdTicket());
    }
}
