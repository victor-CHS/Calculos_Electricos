

let calcular = document.getElementById("calcular")
let potencia = document.getElementById("potencia")
let voltaje = document.getElementById("voltaje")
const factorDePotencia = 0.9

calcular.onclick = () => {
    let resultado = voltaje.value * factorDePotencia
    let resultadoFinal = potencia.value / resultado

    let resultadoCalculo = document.getElementById("resultadoCalculo")
    resultadoCalculo.innerText = "El resultado de la corriente es: " + resultadoFinal + " A"
    print.innerText = resultadoCalculo

    localStorage.setItem("resultado", JSON.stringify(resultadoFinal));

}

reiniciar.onclick = () => {
    localStorage.removeItem("resultado");

}

function multiplicacion(a, b) {
    return a * b
}
const multiConst = multiplicacion(1.73, 0.9)
let calcularUno = document.getElementById("calcularUno")
let potenciaUno = document.getElementById("potenciaUno")
let voltajeUno = document.getElementById("voltajeUno")


calcularUno.onclick = () => {
    let resultado = multiConst * voltajeUno.value
    let resultadoFinal = potenciaUno.value / resultado

    let resultadoCalculoUno = document.getElementById("resultadoCalculoUno")
    resultadoCalculoUno.innerText = "El resultado de la corriente es: " + resultadoFinal + " A"
    print.innerText = resultadoCalculoUno
}

