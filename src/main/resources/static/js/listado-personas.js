window.addEventListener('DOMContentLoaded', event => {
    cargarPersonas();
});

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

      let listadoPersonasHtml = '';

      for(let persona of personas){
         let botonNumeroIdentificacionPersona = '<a href="#modalPersona" onclick="consultarPersona('
                                      +persona.numeroIdentificacionPersona+')" class="btn btn-secondary btn-sm" data-toggle="modal">'
                                      + persona.numeroIdentificacionPersona +'</a>';
         let personaHtml =  '<tr>'
                             +'<td>'+ botonNumeroIdentificacionPersona +'</td>'
                             +'<td>'+persona.nombresYApellidos+'</td>'
                             +'<td>'+persona.correoElectronico+'</td>'
                             +'<td>'+persona.direccionResidencia+'</td>'
                             +'<td>'+persona.numeroTelefonico1+'</td>'
                             +'<td>'+persona.numeroTelefonico2+'</td>'
                           +'</tr>';
         listadoPersonasHtml += personaHtml;
      }

      console.log(personas);
      document.querySelector('#dataTablesPersonas tbody').outerHTML = listadoPersonasHtml;
}

async function crearPersona(){
    numeroIdentificacionPersonaAlmacenado = document.getElementById('txtNuevoNumeroIdentificacionPersona').value;
    var numeroTelefonico1Almacenado = document.getElementById('txtNuevoNumeroTelefonico1').value;
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
        location.reload();
    }else{
        alert('Los campos con * son obligatorios!!!!');
        location.reload();
    }
}

function buscarPersonaEnTabla(){
	var tableReg = document.getElementById('dataTablesPersonas');
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