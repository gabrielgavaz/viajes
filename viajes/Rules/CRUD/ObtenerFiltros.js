import CommonLibrary from './../Libs/Common';

/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function ObtenerFiltros(clientAPI) {
    try {
        //armar array de filtros
        let filterResults = [];

        //sacar filtros de controles
        let aEstado = clientAPI.evaluateTargetPath('#Page:FiltrosViajes/#Control:ComboEstado').getValue();
        if(aEstado[0]) {
            filterResults.push(CommonLibrary.getQueryFilterEQ(clientAPI, "Estado", `'${aEstado[0].ReturnValue}'`));
        }

        let aDestino = clientAPI.evaluateTargetPath('#Page:FiltrosViajes/#Control:ComboDestino').getValue();
        if(aDestino[0]) {
            filterResults.push(CommonLibrary.getQueryFilterEQ(clientAPI, "Destino", `'${aDestino[0].ReturnValue}'`));
        }

        let aSalida = clientAPI.evaluateTargetPath('#Page:FiltrosViajes/#Control:ComboSalida').getValue();
        if(aSalida[0]) {
            filterResults.push(CommonLibrary.getQueryFilterEQ(clientAPI, "Salida", `'${aSalida[0].ReturnValue}'`));
        }

        let sNumViaje = clientAPI.evaluateTargetPath("#Page:FiltrosViajes/#Control:FiltroNroViaje").getValue();
        if(sNumViaje){
            filterResults.push(CommonLibrary.getQueryFilterEQ(clientAPI, "NroViaje", `'${sNumViaje}'`));
        }

        //tomo tambien el ordenamiento
        let oOrder = clientAPI.evaluateTargetPath("#Page:FiltrosViajes/#Control:Sorter").getValue();
        if (oOrder) {
            filterResults.push(oOrder);
        }

        //retornar array de filtros
        return filterResults;
    } catch (error) {
        alert(error);
    }
}
