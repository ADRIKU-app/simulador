//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
    let cmpvalorIngresos=document.getElementById("txtIngresos");
    let cmpValorEgresos=document.getElementById("txtEgresos");

    let valorIngresoStr=cmpvalorIngresos.value;
    let valorEgresosStr=cmpValorEgresos.value;

    let valorIngresos=parseFloat(valorIngresoStr);
    let valorEgresos=parseFloat(valorEgresosStr);

    let valorDisponible=calcularDisponible(valorIngresos,valorEgresos);
    let cmpDisponible=document.getElementById("spnDisponible");

        cmpDisponible.innerText = valorDisponible.toFixed(2);

    let capacidadDePago=calcularCapacidadPago(valorDisponible);
    let cmpCapacidadPago=document.getElementById("spnCapacidadPago");

        cmpCapacidadPago.innerText = capacidadDePago.toFixed(2);

    let cmpMonto=document.getElementById("txtMonto");
    let cmpPlazo=document.getElementById("txtPlazo");
    let cmpTasa=document.getElementById("txtTasaInteres");

    let montoStr=cmpMonto.value;
    let plazoStr=cmpPlazo.value;
    let tasaStr=cmpTasa.value;

    let monto=parseInt(montoStr);
    let plazo=parseInt(plazoStr);
    let tasa=parseInt(tasaStr);

    let interesPagar=calcularInteresSimple(monto,plazo,tasa);
    let cmpInteresPagar=document.getElementById("spnInteresPagar");
        cmpInteresPagar.innerText = interesPagar.toFixed(2);
}