CREATE DATABASE ticket;
USE ticket;

CREATE TABLE persona(
    numeroIdentificacionPersona bigint  NOT NULL,
    nombresYApellidos varchar(100) NOT NULL,
    correoElectronico varchar(100),
    direccionResidencia varchar(100) NOT NULL,
    numeroTelefonico1 varchar(100) NOT NULL,
    numeroTelefonico2 varchar(100),
    CONSTRAINT pk_nip PRIMARY KEY (numeroIdentificacionPersona)
);

CREATE TABLE tickete(
    idTicket int AUTO_INCREMENT,
    numeroIdentificacionPersona2 bigint NOT NUll,
    tituloServicio varchar(200) NOT NULL,
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

INSERT INTO persona (
    `numeroIdentificacionPersona`,
    `nombresYApellidos`,
    `correoElectronico`,
    `direccionResidencia`,
    `numeroTelefonico1`,
    `numeroTelefonico2`)
    VALUES (1115067447,'Diego Roman','damhalo-01@hotmail.com','Carrera 13 #9-69','3013284539','3026821050');

INSERT INTO persona (
    `numeroIdentificacionPersona`,
    `nombresYApellidos`,
    `correoElectronico`,
    `direccionResidencia`,
    `numeroTelefonico1`,
    `numeroTelefonico2`)
    VALUES (1116252778,'Nelcy Mendieta','nelcy.mendieta@gmail.com','Calle 19 #9-36','3185201289','3003930088');

INSERT INTO tickete (
    `numeroIdentificacionPersona2`,
    `tituloServicio`,
    `descripcionServicio`,
    `fechaIngreso`,
    `nivelPrioridad`,
    `descripcionSolucion`,
    `estadoTicket`,
    `notaAdjunta`,
    `fechaUltimaActualizacion`,
    `valorServicio`)
    VALUES (1115067447,'Revision Portatil Vaio','El cliente solicita realizar mantenimeinto fisico, el ventilador suena muy duro','20/05/2022','Bajo','Se realiza mantenimiento fisico encontrando el ventilador tapado','Cerrado','Se llama al cliente para que recoja su equipo, no responde','25/05/2022','40000');

INSERT INTO tickete (
    `numeroIdentificacionPersona2`,
    `tituloServicio`,
    `descripcionServicio`,
    `fechaIngreso`,
    `nivelPrioridad`,
    `descripcionSolucion`,
    `estadoTicket`,
    `notaAdjunta`,
    `fechaUltimaActualizacion`,
    `valorServicio`)
    VALUES (1116252778,'Instalacion de Camaras','El cliente solicita realizar instalcion de 4 camaras en su residencia','22/05/2022','Alto','','Abierto','','','');