var numeroIdentificacionPersonaAlmacenado;
var nombresYApellidosPersonaAlmacenada;
var numeroTelefonico1Almacenado;
var direccionResidenciaAlmacenada;

async function buscarPersona(){
    let numeroIdentificacionPersonaParaBuscar = document.getElementById('txtBuscarNumeroIdentificacionPersona').value;

    const peticion = await fetch('persona/'+numeroIdentificacionPersonaParaBuscar, {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
              });

          try{
                const personaSelect = await peticion.json();
                document.getElementById('txtNuevoNumeroIdentificacionPersona').value = ""+personaSelect.numeroIdentificacionPersona;
                document.getElementById('txtNuevoNumeroIdentificacionPersona').disabled = true;
                document.getElementById('txtNuevoNombresYApellidos').value = ""+personaSelect.nombresYApellidos;
                document.getElementById('txtNuevoCorreoElectronico').value = ""+personaSelect.correoElectronico;
                document.getElementById('txtNuevoDireccionResidencia').value = ""+personaSelect.direccionResidencia
                document.getElementById('txtNuevoNumeroTelefonico1').value = ""+personaSelect.numeroTelefonico1;
                document.getElementById('txtNuevoNumeroTelefonico2').value = ""+personaSelect.numeroTelefonico2;
          }catch(error){
                alert('El cliente no existe');
          }
}

async function actualizarOCrearPersona(){
    numeroIdentificacionPersonaAlmacenado = document.getElementById('txtNuevoNumeroIdentificacionPersona').value;
    nombresYApellidosPersonaAlmacenada = document.getElementById('txtNuevoNombresYApellidos').value;
    numeroTelefonico1Almacenado = document.getElementById('txtNuevoNumeroTelefonico1').value;
    direccionResidenciaAlmacenada = document.getElementById('txtNuevoDireccionResidencia').value;

    if(numeroIdentificacionPersonaAlmacenado!=0 && numeroTelefonico1Almacenado!=''){
        let datosNuevaPersona = {};
        datosNuevaPersona.numeroIdentificacionPersona = document.getElementById('txtNuevoNumeroIdentificacionPersona').value;
        datosNuevaPersona.nombresYApellidos = document.getElementById('txtNuevoNombresYApellidos').value;
        datosNuevaPersona.correoElectronico = document.getElementById('txtNuevoCorreoElectronico').value;
        datosNuevaPersona.direccionResidencia = document.getElementById('txtNuevoDireccionResidencia').value;
        datosNuevaPersona.numeroTelefonico1 = document.getElementById('txtNuevoNumeroTelefonico1').value;
        datosNuevaPersona.numeroTelefonico2 = document.getElementById('txtNuevoNumeroTelefonico2').value;

        const peticion3 = await fetch('nuevaPersona', {
             method: 'PUT',
             headers: {
                 'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
             body: JSON.stringify(datosNuevaPersona)
        });
    }else{
        alert('Los campos con * son obligatorios!!!!');
        window.location.href = 'index.html';
    }
}

async function crearNuevoTicket(){
    var tituloServicioAlmacenado = document.getElementById('txtNuevoTituloServicio').value;
    var descripcionServicioAlmacenado = document.getElementById('txtNuevoDescripcionServicio').value;
    var fechaIngresoAlmacenada = new Date().toLocaleDateString();
    if(tituloServicioAlmacenado!='' && descripcionServicioAlmacenado!=''){
        let datosNuevoTickete = {};
        datosNuevoTickete.numeroIdentificacionPersona2 = numeroIdentificacionPersonaAlmacenado;
        datosNuevoTickete.tituloServicio = document.getElementById('txtNuevoTituloServicio').value;
        datosNuevoTickete.descripcionServicio = document.getElementById('txtNuevoDescripcionServicio').value;
        datosNuevoTickete.fechaIngreso = new Date().toLocaleDateString();
        datosNuevoTickete.nivelPrioridad = document.getElementById('txtNuevoNivelPrioridad').value;
        datosNuevoTickete.estadoTicket = document.getElementById('txtNuevoEstadoTicket').value;
        datosNuevoTickete.fechaUltimaActualizacion = new Date().toLocaleDateString();

        const peticion2 = await fetch('nuevoTicket', {
             method: 'PUT',
             headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(datosNuevoTickete)
        });

        const idNuevoTicket = await peticion2.json();
        console.log(idNuevoTicket);

        imprimirNuevoTicket(idNuevoTicket, fechaIngresoAlmacenada, tituloServicioAlmacenado, descripcionServicioAlmacenado);
        //javascript:window.print();
        alert('TICKET CREADO EXITOSAMENTE!!!');
        window.location.href = 'index.html';
    }else{
        alert('Los campos con * son obligatorios!!!!');
        window.location.href = 'index.html';
    }
}

function imprimirNuevoTicket(idNuevoTicket, fechaIngresoAlmacenada, tituloServicioAlmacenado, descripcionServicioAlmacenado){
    let impresionHTML = '<div>'
                            +'<h1>TICKET inforTIC`s</h1>'
                            +'<table id="datosPersonales" class="tabla">'
                                +'<tr>'
                                    +'<td><b>Numero de ticket: </b></td>'
                                    +'<td><b>'+idNuevoTicket+'</b></td>'
                                    +'<td><b>Fecha de ingreso: </b></td>'
                                    +'<td><b>'+fechaIngresoAlmacenada+'</b></td>'
                                +'</tr>'
                                +'<tr>'
                                    +'<td><b>Identificacion Cliente: </b></td>'
                                    +'<td>'+numeroIdentificacionPersonaAlmacenado+'</td>'
                                    +'<td><b>Nombre Completo: </b></td>'
                                    +'<td>'+nombresYApellidosPersonaAlmacenada+'</td>'
                                +'</tr>'
                                +'<tr>'
                                    +'<td><b>Numero Telefonico: </b></td>'
                                    +'<td>'+numeroTelefonico1Almacenado+'</td>'
                                    +'<td><b>Direccion Residencia: </b></td>'
                                    +'<td>'+direccionResidenciaAlmacenada+'</td>'
                                +'</tr>'
                            +'</table>'
                       +'</div>'
                       +'<div>'
                            +'<table id="datosServicio" class="tabla">'
                                +'<tr>'
                                    +'<td><b>Titulo del Servicio: </b></td>'
                                +'</tr>'
                                +'<tr>'
                                    +'<td>'+tituloServicioAlmacenado+'</td>'
                                +'</tr>'
                                +'<tr>'
                                    +'<td><b>Descripcion del Servicio: </b></td>'
                                +'</tr>'
                                +'<tr>'
                                    +'<td>'+descripcionServicioAlmacenado+'</td>'
                                +'</tr>'
                            +'</table>'
                       +'</div>';
    var contenidoParaImprimir = impresionHTML;
    var ventanaImpresion = window.open('', 'PRINT', 'height=800,width=1000');
    ventanaImpresion.document.write('<html><head>');
    ventanaImpresion.document.write('<style>.tabla{width:100%;border-collapse:collapse;margin:16px 0 16px 0;}.tabla th{border:1px solid #ddd;padding:4px;background-color:#d4eefd;text-align:left;font-size:15px;}.tabla td{border:1px solid #ddd;text-align:center;padding:6px;background-color:#6c757d;}</style>');
        ventanaImpresion.document.write('</head><body>');
        ventanaImpresion.document.write(impresionHTML);
        ventanaImpresion.document.write('</body></html>');
    ventanaImpresion.document.close();
    ventanaImpresion.focus();
    ventanaImpresion.print();
    ventanaImpresion.close();
    return true;
}