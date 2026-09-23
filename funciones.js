//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos,egresos){
    let valorDisponible=ingresos-egresos;

    if (valorDisponible<0){
        return 0;
    }

    return valorDisponible;
}

function calcularCapacidadPago(montoDisponible){
    let capacidadPago=montoDisponible*0.5;

    return capacidadPago;
}

function calcularInteresSimple(monto,tasa,plazoAnios){
    let interes=plazoAnios*monto*(tasa/100);

    return interes;
}

function calcularTotalPagar(monto,interes){
    let valorTotalPagar=(monto+interes)+100;
    return valorTotalPagar;
}