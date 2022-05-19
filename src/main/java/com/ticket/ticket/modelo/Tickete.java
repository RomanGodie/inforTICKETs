package com.ticket.ticket.modelo;

public class Tickete {
    private int idTicket;
    private int numeroIdentificacionPersona2;
    private String tituloServicio;
    private String descripcionServicio;
    private String fechaIngreso;
    private String nivelPrioridad;
    private String descripcionSolucion;
    private String estadoTicket;
    private String notaAdjunta;
    private String fechaUltimaActualizacion;
    private int valorServicio;
    public Tickete(int idTicket, int numeroIdentificacionPersona2, String tituloServicio,
                   String descripcionServicio, String fechaIngreso, String nivelPrioridad,
                   String descripcionSolucion, String estadoTicket, String notaAdjunta,
                   String fechaUltimaActualizacion, int valorServicio) {
        this.idTicket = idTicket;
        this.numeroIdentificacionPersona2 = numeroIdentificacionPersona2;
        this.tituloServicio = tituloServicio;
        this.descripcionServicio = descripcionServicio;
        this.fechaIngreso = fechaIngreso;
        this.nivelPrioridad = nivelPrioridad;
        this.descripcionSolucion = descripcionSolucion;
        this.estadoTicket = estadoTicket;
        this.notaAdjunta = notaAdjunta;
        this.fechaUltimaActualizacion = fechaUltimaActualizacion;
        this.valorServicio = valorServicio;
    }

    public int getIdTicket() {
        return idTicket;
    }

    public void setIdTicket(int idTicket) {
        this.idTicket = idTicket;
    }

    public int getNumeroIdentificacionPersona2() {
        return numeroIdentificacionPersona2;
    }

    public void setNumeroIdentificacionPersona2(int numeroIdentificacionPersona2) {
        this.numeroIdentificacionPersona2 = numeroIdentificacionPersona2;
    }

    public String getTituloServicio() {
        return tituloServicio;
    }

    public void setTituloServicio(String tituloServicio) {
        this.tituloServicio = tituloServicio;
    }

    public String getDescripcionServicio() {
        return descripcionServicio;
    }

    public void setDescripcionServicio(String descripcionServicio) {
        this.descripcionServicio = descripcionServicio;
    }

    public String getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(String fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public String getNivelPrioridad() {
        return nivelPrioridad;
    }

    public void setNivelPrioridad(String nivelPrioridad) {
        this.nivelPrioridad = nivelPrioridad;
    }

    public String getDescripcionSolucion() {
        return descripcionSolucion;
    }

    public void setDescripcionSolucion(String descripcionSolucion) {
        this.descripcionSolucion = descripcionSolucion;
    }
    public String getEstadoTicket() {
        return estadoTicket;
    }

    public void setEstadoTicket(String estadoTicket) {
        this.estadoTicket = estadoTicket;
    }

    public String getNotaAdjunta() {
        return notaAdjunta;
    }

    public void setNotaAdjunta(String notaAdjunta) {
        this.notaAdjunta = notaAdjunta;
    }

    public String getFechaUltimaActualizacion() {
        return fechaUltimaActualizacion;
    }

    public void setFechaUltimaActualizacion(String fechaUltimaActualizacion) {
        this.fechaUltimaActualizacion = fechaUltimaActualizacion;
    }

    public int getValorServicio() {
        return valorServicio;
    }

    public void setValorServicio(int valorServicio) {
        this.valorServicio = valorServicio;
    }
}
