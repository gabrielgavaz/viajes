/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ChequearConexion(clientAPI) {
    try {
        //se usa otro modulo nativescript para ver si tiene conexion
        let moduloConexion = clientAPI.nativescript.connectivityModule;
        let type = moduloConexion.getConnectionType();
        // let pageProxy = context.getPageProxy();

        if (type === moduloConexion.connectionType.none) {
            //no está conectado a internet
            alert("sin conexión")
        } else {
            //si está conectado
            alert("con conexión")
        }

    } catch (error) {
        alert(error);
    }
}
