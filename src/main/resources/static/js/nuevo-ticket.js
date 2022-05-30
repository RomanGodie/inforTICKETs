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
                location.reload();
          }

}

async function crearNuevoTicket(){
    actualizarOCrearPersona();
}

async function actualizarOCrearPersona(){

}