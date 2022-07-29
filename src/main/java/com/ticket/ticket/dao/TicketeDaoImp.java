package com.ticket.ticket.dao;

import com.ticket.ticket.modelo.Tickete;
import lombok.AllArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.PreparedStatement;
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
                +"valorServicio) values (?,?,?,?,?,?,?,?,?,?)";
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
    public long createTicketRetornandoId(Tickete tickete){
        String consulta = "INSERT INTO tickete "
                +"(numeroIdentificacionPersona2, tituloServicio, descripcionServicio, "
                +"fechaIngreso, nivelPrioridad, descripcionSolucion, estadoTicket, notaAdjunta, fechaUltimaActualizacion, "
                +"valorServicio) values (?,?,?,?,?,?,?,?,?,?)";
        KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(connection -> {
            PreparedStatement stmt = connection.prepareStatement(consulta, new String[]{"idTicket"});
            stmt.setLong(1,tickete.getNumeroIdentificacionPersona2());
            stmt.setString(2,tickete.getTituloServicio());
            stmt.setString(3, tickete.getDescripcionServicio());
            stmt.setString(4, tickete.getFechaIngreso());
            stmt.setString(5, tickete.getNivelPrioridad());
            stmt.setString(6, tickete.getDescripcionSolucion());
            stmt.setString(7, tickete.getEstadoTicket());
            stmt.setString(8, tickete.getNotaAdjunta());
            stmt.setString(9, tickete.getFechaUltimaActualizacion());
            stmt.setInt(10, tickete.getValorServicio());
            return stmt;},keyHolder);
        return keyHolder.getKey().intValue();
    }

    @Override
    public Tickete readUnTicketePorIdTickete(int idTicket) {
        String consulta = "SELECT * FROM tickete WHERE idTicket = ?";
        return jdbcTemplate.queryForObject(consulta,
                new Object[]{idTicket},
                (rs, rowNum) -> new Tickete(
                        rs.getInt("idTicket"),
                        rs.getLong("numeroIdentificacionPersona2"),
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
        String consulta = "SELECT * FROM tickete ORDER BY idTicket DESC";
        return jdbcTemplate.query(consulta,(rs, rowNum) ->
                new Tickete(
                        rs.getInt("idTicket"),
                        rs.getLong("numeroIdentificacionPersona2"),
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
                +"tituloServicio = ?, descripcionServicio = ?, "
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
