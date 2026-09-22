//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML
function calcular(){
    let cmpvalorIngresos=document.getElementById("txtIngresos");
    let cmpValorEgresos=document.getElementById("txtEgresos");

    let valorIngresoStr=cmpvalorIngresos.value;
    let valorEgresosStr=cmpValorEgresos.value;

    let valorIngresos=parseFloat(valorIngresoStr);
    let valorEgresos=parseFloat(valorEgresosStr);

    let valorDisponible=calcularDisponible(valorIngresos,valorEgresos);
        cmpDisponible=document.getElementById("spnDisponible");

        cmpDisponible.innerText = valorDisponible.toFixed(2);
}