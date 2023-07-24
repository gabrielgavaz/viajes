/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function BuscarViaje(clientAPI) {
    try {
        let pageProxy = clientAPI.getPageProxy();
        //hacer un read desde una regla
        pageProxy.showActivityIndicator("Buscando Viaje...");
        clientAPI.read("/Viajes/Services/VIAJES.service", "ViajeSet", [], `$filter=NroViaje eq '1'`).then(function (oData) {
            pageProxy.dismissActivityIndicator();
            if (oData.getItem(0)) {
                //binding
                pageProxy.setActionBinding(oData.getItem(0));
                let oClientData = pageProxy.getClientData();
                oClientData.NroViaje = oData.getItem(0).NroViaje;
                oClientData.EstadoDesc = oData.getItem(0).EstadoDesc;
                oClientData.Datos = oData.getItem(0);
                pageProxy.redraw();
                // clientAPI.executeAction('/Viajes/Actions/Detalle/NavToDetalle.action');
            }
        }).catch(function (error) {
            pageProxy.dismissActivityIndicator();
            alert(error);
        });
    } catch (error) {
        alert(error)
    }
}
