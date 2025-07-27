
let seccionTrans = [1.31, 2.08, 3.31, 5.26, 8.37, 13.30, 21.20, 33.60, 53.49, 67.43, 85.01, 107.20];
let seccion = "";

for (let i = 0; i < seccionTrans.length; i++) {
    seccion += "<option>" + seccionTrans[i] + "</option>"
}

//Caida de tension monofasico
document.getElementById("cable").innerHTML = "<option>" + seccion + "</option>"

let calcular = document.getElementById("calcular")
let distancia = document.getElementById("distancia")
let corriente = document.getElementById("corriente")
let cable = document.getElementById("cable")
const cuatro = 4
const volt = 127

calcular.onclick = () => {
    let resultado1 = cuatro * distancia.value * corriente.value
    let resultado2 = volt * cable.value
    let resultadoFinal = resultado1 / resultado2

    localStorage.setItem("resultado", JSON.stringify(resultadoFinal));
    let dato = JSON.parse(localStorage.getItem("resultado"))

    let resultadoCalculo = document.getElementById("resultadoCalculo")
    if (dato <= 3) {
        resultadoCalculo.innerText = "El resultado de la caida de tension es: \n" + dato + " %"
        print.innerText = resultadoCalculo
    } else if (dato > 3) {
        resultadoCalculo.innerText = "El resultado de la caida de tension es: " + dato + " %,\n " + "se debera elegir otro calibre"
        print.innerText = resultadoCalculo
    }
}

limpiar.onclick = () => {
    localStorage.removeItem("resultado");

    let resultadoCalculo = document.getElementById("resultadoCalculo")
    resultadoCalculo.innerText = " "
    print.innerText = resultadoCalculo
}

const sectionFormulario = document.getElementById("sectionFormulario");
const reiniciar = document.getElementById("reiniciar");

function limpiarCampos(form, accion) {
    const elementos = form.elements;
    for (let i = 0; i < elementos.length; i++) {
        const campo = elementos[i];
        if (campo.tagName !== 'BUTTON' && campo.type !== 'submit') {
            accion(campo);
        }
    }
}

function limpiarValor(campo) {
    campo.value = '';
}

reiniciar.addEventListener("click", () => {
    limpiarCampos(sectionFormulario, limpiarValor);

});


//Caida de tension Bifasica
document.getElementById("cableUno").innerHTML = "<option>" + seccion + "</option>"

let calcularUno = document.getElementById("calcularUno")
let distanciaUno = document.getElementById("distanciaUno")
let corrienteUno = document.getElementById("corrienteUno")
let voltajeUno = document.getElementById("voltajeUno")
let cableUno = document.getElementById("cableUno")
const numeroDos = 2

calcularUno.onclick = () => {
    let resultadoUno = numeroDos * distanciaUno.value * corrienteUno.value
    let resultadoDos = voltajeUno.value * cableUno.value
    let resultadoFinal = resultadoUno / resultadoDos

    localStorage.setItem("resultado", JSON.stringify(resultadoFinal));
    let dato = JSON.parse(localStorage.getItem("resultado"))

    let resultadoCalculoUno = document.getElementById("resultadoCalculoUno")
    if (dato <= 3) {
        resultadoCalculoUno.innerText = "El resultado de la caida de tension es: \n" + dato + " %"
        print.innerText = resultadoCalculoUno
    } else if (dato > 3) {
        resultadoCalculoUno.innerText = "El resultado de la caida de tension es: " + dato + " %,\n " + "se debera elegir otro calibre"
        print.innerText = resultadoCalculoUno
    }
}

limpiarUno.onclick = () => {
    localStorage.removeItem("resultado");

    let resultadoCalculoUno = document.getElementById("resultadoCalculoUno")
    resultadoCalculoUno.innerText = " "
    print.innerText = resultadoCalculoUno
}

const sectionFormularioUno = document.getElementById("sectionFormularioUno");
const reiniciarUno = document.getElementById("reiniciarUno");

function limpiarCampos(form, accion) {
    const elementos = form.elements;
    for (let i = 0; i < elementos.length; i++) {
        const campo = elementos[i];
        if (campo.tagName !== 'BUTTON' && campo.type !== 'submit') {
            accion(campo);
        }
    }
}

function limpiarValor(campo) {
    campo.value = '';
}

reiniciarUno.addEventListener("click", () => {
    limpiarCampos(sectionFormularioUno, limpiarValor);

});


//Caida de tension Trifasica
document.getElementById("cableDos").innerHTML = "<option>" + seccion + "</option>"

function multiplicacion(a, b) {
    return a * b
}
const multiConst = multiplicacion(2, 1.73)
let calcularDos = document.getElementById("calcularDos")
let distanciaDos = document.getElementById("distanciaDos")
let corrienteDos = document.getElementById("corrienteDos")
let voltajeDos = document.getElementById("voltajeDos")
let cableDos = document.getElementById("cableDos")

calcularDos.onclick = () => {
    let resultado1 = multiConst * distanciaDos.value * corrienteDos.value
    let resultado2 = voltajeDos.value * cableDos.value
    let resultadoFinal = resultado1 / resultado2

    localStorage.setItem("resultado", JSON.stringify(resultadoFinal));
    let dato = JSON.parse(localStorage.getItem("resultado"))

    let resultadoCalculoDos = document.getElementById("resultadoCalculoDos")
    if (dato <= 3) {
        resultadoCalculoDos.innerText = "El resultado de la caida de tension es: " + dato + " %"
        print.innerText = resultadoCalculoDos
    } else if (dato > 3) {
        resultadoCalculoDos.innerText = "El resultado de la caida de tension es: " + dato + " %,\n " + "se debera elegir otro calibre"
        print.innerText = resultadoCalculoDos
    }
}

limpiarDos.onclick = () => {
    localStorage.removeItem("resultado");

    let resultadoCalculoDos = document.getElementById("resultadoCalculoDos")
    resultadoCalculoDos.innerText = " "
    print.innerText = resultadoCalculoDos
}

const sectionFormularioDos = document.getElementById("sectionFormularioDos");
const reiniciarDos = document.getElementById("reiniciarDos");

function limpiarCampos(form, accion) {
    const elementos = form.elements;
    for (let i = 0; i < elementos.length; i++) {
        const campo = elementos[i];
        if (campo.tagName !== 'BUTTON' && campo.type !== 'submit') {
            accion(campo);
        }
    }
}

function limpiarValor(campo) {
    campo.value = '';
}

reiniciarDos.addEventListener("click", () => {
    limpiarCampos(sectionFormularioDos, limpiarValor);

});

function reiniciarAlert() {
    Swal.fire({
        position: "center-center",
        icon: "success",
        title: "Formulario Reiniciado",
        showConfirmButton: false,
        timer: 1500,
        background: "#000",
        color: "#fff",
        iconColor: "#00FF00"
    });
}






