/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function OnChangeNombre(context) {
    try {
        //obtengo el valor del control y lo guardo en el clientData de una page
        const sValue = context.getValue();
        //sacar clientData de una pagina (debe haberse ejecutado)
        let oClientData = context.evaluateTargetPathForAPI('#Page:IniciarViaje').getClientData();

        oClientData.Nombre = sValue;
    } catch (error) {
        alert(error);
    }
}
