CREATE DATABASE ticket;
USE ticket;

CREATE TABLE persona(
    numeroIdentificacionPersona int NOT NULL,
    nombresYApellidos varchar(100) NOT NULL,
    correoElectronico varchar(100),
    direccionResidencia varchar(100) NOT NULL,
    numeroTelefonico1 varchar(100) NOT NULL,
    numeroTelefonico2 varchar(100),
    CONSTRAINT pk_nip PRIMARY KEY (numeroIdentificacionPersona)
);

CREATE TABLE tickete(
    idTicket int AUTO_INCREMENT,
    numeroIdentificacionPersona2 int NOT NUll,
    tituloServicio varchar(100) NOT NULL,
    descripcionServicio varchar(500) NOT NULL,
    fechaIngreso varchar(100) NOT NULL,
    nivelPrioridad varchar(100) NOT NULL,
    descripcionSolucion varchar(500) NULL,
    estadoTicket varchar(100) NOT NULL,
    notaAdjunta varchar(500) NULL,
    fechaUltimaActualizacion varchar(100) NOT NULL,
    valorServicio int NULL,
    CONSTRAINT pk_it PRIMARY KEY (idTicket),
    CONSTRAINT fk_nip2 FOREIGN KEY (numeroIdentificacionPersona2) REFERENCES persona(numeroIdentificacionPersona)
);