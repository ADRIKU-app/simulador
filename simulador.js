// AQUI EL JAVASCRIPT PARA MANIPULAR EL HTML

// Función de validación genérica (Vacío y Números)
function validarGenerico(idCmp, idMsj) {
    let valor = document.getElementById(idCmp).value.trim();
    let cmpMsj = document.getElementById(idMsj);

    if (valor === "") {
        cmpMsj.innerText = "Este campo no puede estar vacío";
        return false;
    }
    if (isNaN(valor)) {
        cmpMsj.innerText = "Solo se permiten números";
        return false;
    }
    
    cmpMsj.innerText = "";
    return true;
}

// Validación específica para Egresos
function validarEgresos() {
    let esValido = validarGenerico('txtEgresos', 'errEgresos');
    if (!esValido) return false;

    let ingresos = document.getElementById('txtIngresos').value.trim();
    let egresos = document.getElementById('txtEgresos').value.trim();
    let cmpMsj = document.getElementById('errEgresos');

    if (ingresos !== "" && !isNaN(ingresos)) {
        if (parseFloat(egresos) > parseFloat(ingresos)) {
            cmpMsj.innerText = "Los egresos no deben ser mayores a los ingresos";
            return false;
        }
    }
    
    cmpMsj.innerText = "";
    return true;
}

// Validación específica para Plazo
function validarPlazo() {
    let esValido = validarGenerico('txtPlazo', 'errPlazo');
    if (!esValido) return false;

    let plazo = document.getElementById('txtPlazo').value.trim();
    let cmpMsj = document.getElementById('errPlazo');

    if (parseFloat(plazo) > 5) {
        cmpMsj.innerText = "El plazo en años no debe ser mayor a 5";
        return false;
    }

    cmpMsj.innerText = "";
    return true;
}

function calcular() {
    // Ejecutar todas las validaciones antes de calcular
    let valIngresos = validarGenerico('txtIngresos', 'errIngresos');
    let valEgresos = validarEgresos();
    let valMonto = validarGenerico('txtMonto', 'errMonto');
    let valPlazo = validarPlazo();
    let valTasa = validarGenerico('txtTasaInteres', 'errTasaInteres');

    // Si alguna validación es falsa, se detiene la ejecución
    if (!valIngresos || !valEgresos || !valMonto || !valPlazo || !valTasa) {
        return;
    }

    // Cálculos financieros
    let cmpvalorIngresos = document.getElementById("txtIngresos");
    let cmpValorEgresos = document.getElementById("txtEgresos");

    let valorIngresos = parseFloat(cmpvalorIngresos.value);
    let valorEgresos = parseFloat(cmpValorEgresos.value);

    let valorDisponible = calcularDisponible(valorIngresos, valorEgresos);
    let cmpDisponible = document.getElementById("spnDisponible");
    cmpDisponible.innerText = valorDisponible.toFixed(2);

    let capacidadDePago = calcularCapacidadPago(valorDisponible);
    let cmpCapacidadPago = document.getElementById("spnCapacidadPago");
    cmpCapacidadPago.innerText = capacidadDePago.toFixed(2);

    let cmpMonto = document.getElementById("txtMonto");
    let cmpPlazo = document.getElementById("txtPlazo");
    let cmpTasa = document.getElementById("txtTasaInteres");

    let monto = parseInt(cmpMonto.value);
    let plazo = parseInt(cmpPlazo.value);
    let tasa = parseInt(cmpTasa.value);

    let interesPagar = calcularInteresSimple(monto, tasa, plazo);
    let cmpInteresPagar = document.getElementById("spnInteresPagar");
    cmpInteresPagar.innerText = interesPagar.toFixed(2);

    let valorTotalAPagar = calcularTotalPagar(monto, interesPagar);
    let cmpValorTotal = document.getElementById("spnTotalPrestamo");
    cmpValorTotal.innerText = valorTotalAPagar.toFixed(2);

    let valorCuotaMensual = calcularCuotaMensual(valorTotalAPagar, plazo);
    let cmpValorCuota = document.getElementById("spnCuotaMensual");
    cmpValorCuota.innerText = valorCuotaMensual.toFixed(2);

    let creditoAprobado = aprobarCredito(capacidadDePago, valorCuotaMensual);
    let cmpEstadoCredito = document.getElementById("spnEstadoCredito");

    if (creditoAprobado == true) {
        cmpEstadoCredito.innerText = "CREDITO APROBADO";
        cmpEstadoCredito.style.color = "#098728";
    } else {
        cmpEstadoCredito.innerText = "CREDITO RECHAZADO";
        cmpEstadoCredito.style.color = "#B80909";
    }
}