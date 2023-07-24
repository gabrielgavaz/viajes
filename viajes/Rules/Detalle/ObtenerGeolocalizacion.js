import Geolocalizacion from './../Libs/Geolocalizacion';
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ObtenerGeolocalizacion(clientAPI) {
    try {
        let pLatitud = Geolocalizacion.getLatitud(),
            pLongitud = Geolocalizacion.getLongitud();
            oClientData = clientAPI.evaluateTargetPathForAPI('#Page:DatosTransportista').getClientData();
        

        Promise.all([pLatitud, pLongitud]).then(function (aResults) {
            alert("Latitud: " + aResults[0]);
            alert("Longitud: " + aResults[1]);
            oClientData.Latitud = aResults[0];
            oClientData.Longitud = aResults[1];
        }.bind(this)).catch(function() {

        });
    } catch (error) {
        alert(error)
    }
}