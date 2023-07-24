/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ValidarFechas(clientAPI) {
    try {
        //obtener un control de una pagina con la funcion evaluateTargetPath
        //se necesita el nombre de la pagina y el nombre del control
        let oDpSalida = clientAPI.evaluateTargetPath('#Page:CrearViaje/#Control:DpFechaSalida'),
        oDpLlegada = clientAPI.evaluateTargetPath('#Page:CrearViaje/#Control:DpDestino');

        //comparo en este caso las fechas
        if(oDpLlegada.getValue() > oDpSalida.getValue()){
            //salio bien la validación entonces llamo accion de crear
            clientAPI.executeAction('/Viajes/Actions/CRUD/CrearViaje.action');
        } else {
            //salio mal, muestro accion de mensaje
            clientAPI.executeAction('/Viajes/Actions/CRUD/ErrorValidacionFechas.action');
        }
    } catch (error) {
        alert(error);
    }
}
