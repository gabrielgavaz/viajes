/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function FormatterEstado(clientAPI) {
    const oData = clientAPI.binding;
    let sColor = "";

    switch (oData.Estado) {
        case "P":
            sColor = "Mango";
            break;
        case "E":
            sColor = "Green";
            break;
        default:
            sColor = "Red";
            break;
    }

    return sColor;
}
