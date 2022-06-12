window.addEventListener('DOMContentLoaded', event => {
    cargarTickets();
});

async function cargarTickets(){

      const request = await fetch('tickets', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        //body: JSON.stringify({a: 1, b: 'Textual content'})
      });
      const tickets = await request.json();

      let listadoTicketsHtml = '';

      for(let ticket of tickets){
         let botonIdTicket = '<a href="#modalTicket" onclick="consultarTicket('
                                      +ticket.idTicket+')" class="btn btn-secondary btn-sm" data-toggle="modal">'
                                      + ticket.idTicket +'</a>';
         let botonNumeroIdentificacionPersona = '<a href="#modalPersona" onclick="consultarPersona('
                                      +ticket.numeroIdentificacionPersona2+')" class="btn btn-secondary btn-sm" data-toggle="modal">'
                                      + ticket.numeroIdentificacionPersona2 +'</a>';
         let ticketHtml =  '<tr>'
                             +'<td>'+ botonIdTicket +'</td>'
                             +'<td>'+ botonNumeroIdentificacionPersona +'</td>'
                             +'<td>'+ticket.tituloServicio+'</td>'
                             +'<td>'+ticket.fechaIngreso+'</td>'
                             +'<td>'+ticket.nivelPrioridad+'</td>'
                             +'<td>'+ticket.estadoTicket+'</td>'
                             +'<td>'+ticket.fechaUltimaActualizacion+'</td>'
                           +'</tr>';
         listadoTicketsHtml += ticketHtml;
      }

      document.querySelector('#datatablesSimple1 tbody').outerHTML = listadoTicketsHtml;
}

async function cargarPersonas(){

      const request = await fetch('personas', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
        //body: JSON.stringify({a: 1, b: 'Textual content'})
      });
      const personas = await request.json();

      let listadoHtml = '';

      for(let persona of personas){
         let botonNumeroIdentificacionPersona = '<a href="#modalPersona" onclick="consultarPersona('
                                      +ticket.numeroIdentificacionPersona2+')" class="btn btn-primary btn-sm" data-toggle="modal">'
                                      + ticket.numeroIdentificacionPersona2 +'</a>';
         let ticketHtml =  '<tr>'
                             +'<td>'+ botonNumeroIdentificacionPersona +'</td>'
                             +'<td>'+persona.nombresYApellidos+'</td>'
                             +'<td>'+persona.correoElectronico+'</td>'
                             +'<td>'+persona.direccionResidencia+'</td>'
                             +'<td>'+persona.numeroTelefonico1+'</td>'
                             +'<td>'+persona.numeroTelefonico2+'</td>'
                           +'</tr>';
         listadoHtml += ticketHtml;
      }

      console.log(personas);
      document.querySelector('#dataTablesPersonas tbody').outerHTML = listadoHtml;
}

async function consultarPersona(id){

    const peticion1 = await fetch('persona/'+id, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          });
      const personaSelect = await peticion1.json();


      let personaModalHtml = '<tr><td><td><b>Numero Identificacion: </b></td><td><input type="text" id="txtNumeroIdentificacionPersona" value="'
                                            +personaSelect.numeroIdentificacionPersona+'" disabled="true"></td></td>'+
                            '<td><td><b>Nombre Completo: </b></td><td><input type="text" id="txtNombresYApellidos" value="'
                                            +personaSelect.nombresYApellidos+'"></td></td></tr>'+
                            '<tr><td><td><b>Correo Electronico: </b></td><td><input type="email" id="txtCorreoElectronico" value="'
                                            +personaSelect.correoElectronico+'"></td></td>'+
                            '<td><td><b>Dir. Residencia: </b></td><td><input type="text" id="txtDireccionResidencia" value="'
                                            +personaSelect.direccionResidencia+'"></td></td></tr>'+
                            '<tr><td><td><b>Num. Telefonico 1: </b></td><td><input type="tel" id="txtNumeroTelefonico1" value="'
                                            +personaSelect.numeroTelefonico1+'"></td></td>'+
                            '<td><td><b>Num. Telefonico 2: </b></td><td><input type="tel" id="txtNumeroTelefonico2" value="'
                                            +personaSelect.numeroTelefonico2+'"></td></td></tr>';

      document.querySelector('#personaTableModal tbody').outerHTML = personaModalHtml;
}

async function actualizarDatosPersona(){
    let datosPersona = {};
    datosPersona.numeroIdentificacionPersona = document.getElementById('txtNumeroIdentificacionPersona').value;
    datosPersona.nombresYApellidos = document.getElementById('txtNombresYApellidos').value;
    datosPersona.correoElectronico = document.getElementById('txtCorreoElectronico').value;
    datosPersona.direccionResidencia = document.getElementById('txtDireccionResidencia').value;
    datosPersona.numeroTelefonico1 = document.getElementById('txtNumeroTelefonico1').value;
    datosPersona.numeroTelefonico2 = document.getElementById('txtNumeroTelefonico2').value;

    const peticion = await fetch('actualizarPersona', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosPersona)
      });
      location.reload();
      alert('Persona actualizada exitosamente');
}

async function consultarTicket(id){
    const peticion2 = await fetch('ticket/'+id, {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
              });
          const ticketSelect = await peticion2.json();


      let ticketModalHtml = '<div class="card-body">'+
                                '<div class="table-responsive">'+
                                     '<table class="table table-bordered" width="100%" cellspacing="0">'+
                                             '<thead>'+
                                                    '<tr>'+
                                                        '<th>Numero de ticket</th>'+
                                                        '<th>Numero Identificacion</th>'+
                                                        '<th>Fecha de ingreso</th>'+
                                                        '<th>Fecha Ultima Actualizacion</th>'+
                                                    '</tr>'+
                                             '</thead>'+
                                             '<tbody>'+
                                                     '<tr>'+
                                                         '<td id="txtIdTicket">'+ticketSelect.idTicket+'</td>'+
                                                         '<td id="txtNumeroIdentificacionPersona2">'+ticketSelect.numeroIdentificacionPersona2+'</td>'+
                                                         '<td id="txtFechaIngreso">'+ticketSelect.fechaIngreso+'</td>'+
                                                         '<td id="txtFechaUltimaActualizacion">'+ticketSelect.fechaUltimaActualizacion+'</td>'+
                                             '</tbody>'+
                                     '</table>'+
                                '</div>'+
                            '</div>'+
                            '<div class="row">'+
                                '<div class="col-xl-6">'+
                                     '<div class="card mb-4">'+
                                          '<div class="card-header">'+
                                               '<i class="fas fa-chart-bar me-1"></i>Titulo del Servicio:'+
                                               '<input type="text" class="dataTable-input" id="txtTituloServicio" value="'+
                                                         ticketSelect.tituloServicio+'">'+
                                          '</div>'+
                                          '<div class="card-body">'+
                                               '<i class="fas fa-chart-bar me-1"></i>Descripcion del Servicio:'+
                                			   '<textarea rows="4" cols="65" class="dataTable-input" id="txtDescripcionServicio">'+
                                                         ticketSelect.descripcionServicio+'</textarea>'+
                                		  '</div>'+
                                     '</div>'+
                                '</div>'+
                                '<div class="col-xl-6">'+
                                     '<div class="card mb-4">'+
                                          '<div class="card-body">'+
                                               '<b>Nivel de Prioridad</b>'+
                                               '<input type="text" class="dataTable-input" id="txtNivelPrioridad" value="'+
                                                        ticketSelect.nivelPrioridad+'" autocomplete="on">'+
                                               '<b>Estado del Ticket</b>'+
                                			   '<input type="text" class="dataTable-input" id="txtEstadoTicket" value="'+
                                                        ticketSelect.estadoTicket+'" autocomplete="on">'+
                                               '<b>Valor del servicio</b>'+
                                			   '<input type="text" class="dataTable-input" id="txtValorServicio" value="'+
                                                        ticketSelect.valorServicio+'">'+
                                	      '</div>'+
                                     '</div>'+
                                '</div>'+
                            '</div>'+
                            '<div class="row">'+
                                '<div class="col-xl-6">'+
                                     '<div class="card mb-4">'+
                                          '<div class="card-header">'+
                                               '<i class="fas fa-chart-bar me-1"></i>Descripcion de la Solucion:'+
                                          '</div>'+
                                          '<div class="card-body">'+
                                			   '<textarea rows="5" cols="65" class="dataTable-input" id="txtDescripcionSolucion">'+
                                                        ticketSelect.descripcionSolucion+'</textarea>'+
                                	      '</div>'+
                                     '</div>'+
                                '</div>'+
                                '<div class="col-xl-6">'+
                                     '<div class="card mb-4">'+
                                          '<div class="card-header">'+
                                               '<i class="fas fa-chart-bar me-1"></i>Nota Adjunta:'+
                                          '</div>'+
                                          '<div class="card-body">'+
                                			   '<textarea rows="5" cols="65" class="dataTable-input" id="txtNotaAdjunta">'+
                                                         ticketSelect.notaAdjunta+'</textarea>'+
                                		  '</div>'+
                                     '</div>'+
                                '</div>'+
                            '</div>';

          document.querySelector('#ticketAreaRowModal').outerHTML = ticketModalHtml;
}

async function actualizarDatosTicket(){

    let datosTickete = {};
    datosTickete.idTicket = document.getElementById('txtIdTicket').innerText;
    datosTickete.numeroIdentificacionPersona2 = document.getElementById('txtNumeroIdentificacionPersona2').innerText;
    datosTickete.tituloServicio = document.getElementById('txtTituloServicio').value;
    datosTickete.descripcionServicio = document.getElementById('txtDescripcionServicio').value;
    datosTickete.fechaIngreso = document.getElementById('txtFechaIngreso').innerText;
    datosTickete.nivelPrioridad = document.getElementById('txtNivelPrioridad').value;
    datosTickete.descripcionSolucion = document.getElementById('txtDescripcionSolucion').value;
    datosTickete.estadoTicket = document.getElementById('txtEstadoTicket').value;
    datosTickete.notaAdjunta = document.getElementById('txtNotaAdjunta').value;
    datosTickete.fechaUltimaActualizacion = new Date().toLocaleDateString();
    datosTickete.valorServicio = document.getElementById('txtValorServicio').value;

    const peticion = await fetch('actualizarTickete', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosTickete)
      });

      location.reload();
      alert('Ticket actualizado exitosamente');
}

/*function imprimirTicketDiligenciado(idNuevoTicket, fechaIngresoAlmacenada, tituloServicioAlmacenado, descripcionServicioAlmacenado){
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
}*/

function buscar(){
	var tableReg = document.getElementById('datatablesSimple1');
	var searchText = document.getElementById('buscarTermino').value.toLowerCase();
	var cellsOfRow="";
	var found=false;
	var compareWith="";

	// Recorremos todas las filas con contenido de la tabla
	for (var i = 1; i < tableReg.rows.length; i++){
		cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
		found = false;
		// Recorremos todas las celdas
		for (var j = 0; j < cellsOfRow.length && !found; j++){
			compareWith = cellsOfRow[j].innerHTML.toLowerCase();
			// Buscamos el texto en el contenido de la celda
			if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1)){
				found = true;
			}
		}
		if(found){
			tableReg.rows[i].style.display = '';
		}else{
			// si no ha encontrado ninguna coincidencia, esconde la
			// fila de la tabla
			tableReg.rows[i].style.display = 'none';
		}
	}
}