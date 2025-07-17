
var seccionTrans = [1.31, 2.08, 3.31, 5.26, 8.37, 13.30, 21.20, 33.60, 53.49, 67.43, 85.01, 107.20];
var seccion = "";

for (var i = 0; i < seccionTrans.length; i++) {
    seccion += "<option>" + seccionTrans[i] + "</option>"
}
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

    let resultadoCalculo = document.getElementById("resultadoCalculo")
    if (resultadoFinal <= 3) {
        resultadoCalculo.innerText = "El resultado de la caida de tension es: " + resultadoFinal + " %"
        print.innerText = resultadoCalculo
    } else if (resultadoFinal > 3) {
        resultadoCalculo.innerText = "El resultado de la caida de tension es: " + resultadoFinal + " %,\n " + "se debera elegir otro calibre"
        print.innerText = resultadoCalculo
    }

}


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

    let resultadoCalculoUno = document.getElementById("resultadoCalculoUno")
    if (resultadoFinal <= 3) {
        resultadoCalculoUno.innerText = "El resultado de la caida de tension es: " + resultadoFinal + " %"
        print.innerText = resultadoCalculoUno
    } else if (resultadoFinal > 3) {
        resultadoCalculoUno.innerText = "El resultado de la caida de tension es: " + resultadoFinal + " %,\n " + "se debera elegir otro calibre"
        print.innerText = resultadoCalculoUno
    }
}


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

    let resultadoCalculoDos = document.getElementById("resultadoCalculoDos")
    if (resultadoFinal <= 3) {
        resultadoCalculoDos.innerText = "El resultado de la caida de tension es: " + resultadoFinal + " %"
        print.innerText = resultadoCalculoDos
    } else if (resultadoFinal > 3) {
        resultadoCalculoDos.innerText = "El resultado de la caida de tension es: " + resultadoFinal + " %,\n " + "se debera elegir otro calibre"
        print.innerText = resultadoCalculoDos
    }



}










