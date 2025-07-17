

let calcular = document.getElementById("calcular")
let potencia = document.getElementById("potencia")
let voltaje = document.getElementById("voltaje")
const factorDePotencia = 0.9

calcular.onclick = () => {
    let resultado = voltaje.value*factorDePotencia
    let resultadoFinal = potencia.value/resultado

    let resultadoCalculo = document.getElementById("resultadoCalculo")
    resultadoCalculo.innerText = "El resultado de la corriente es: " + resultadoFinal + " A"
    print.innerText = resultadoCalculo    
}

 

function multiplicacion(a, b) {
    return a * b
}    
const multiConst = multiplicacion(1.73, 0.9)
let calcularUno = document.getElementById("calcularUno")
let potenciaUno = document.getElementById("potenciaUno")
let voltajeUno = document.getElementById("voltajeUno")


calcularUno.onclick = () => {
    let resultado = multiConst*voltajeUno.value
    let resultadoFinal = potenciaUno.value/resultado

    let resultadoCalculoUno = document.getElementById("resultadoCalculoUno")
    resultadoCalculoUno.innerText = "El resultado de la corriente es: " + resultadoFinal + " A"
    print.innerText = resultadoCalculoUno    
}





// function caidaDeTension1() {
//     const cuatro = 4
//     const voltaje = 127
//     let distancia = parseInt(prompt("Ingrese la distancia en ml"))
//     let corriente = parseInt(prompt("Ingrese la corriente nominal en A"))
//     for (let i = 0; i < calibres.length; i++) {
//         console.log(calibres[i])
//     }
//     let seccion = parseInt(prompt("Ingrese la seccion transversal del calibre a usar"))
//     let resultado1 = cuatro * distancia * corriente
//     let resultado2 = voltaje * seccion
//     let resultadoFinal = resultado1 / resultado2
//     if (resultadoFinal <= 3) {
//         alert("el resultado de la caida de tension es " + resultadoFinal + " %")
//     } else if (resultadoFinal > 3) {
//         alert("el resultado de la caida de tension es " + resultadoFinal + " % " + " se debera seleccionar otro calibre ")
//     }
// }

// function caidaDeTension2() {
//     const numeroDos = 2
//     let distancia = parseInt(prompt("Ingrese la distancia en ml"))
//     let corriente = parseInt(prompt("Ingrese la corriente nominal en A"))
//     let voltaje = parseInt(prompt("Ingrese el voltaje, 127 o 220 V"))
//     for (let i = 0; i < calibres.length; i++) {
//         console.log(calibres[i])
//     }
//     let seccion = parseInt(prompt("Ingrese la seccion transversal del calibre a usar"))
//     let resultado1 = numeroDos * distancia * corriente
//     let resultado2 = voltaje * seccion
//     let resultadoFinal = resultado1 / resultado2
//     if (resultadoFinal <= 3) {
//         alert("el resultado de la caida de tension es " + resultadoFinal + " %")
//     } else if (resultadoFinal > 3) {
//         alert("el resultado de la caida de tension es " + resultadoFinal + " % " + " se debera seleccionar otro calibre ")
//     }
// }

// function caidaDeTension3() {
//     function multiplicacion(a, b) {
//         return a * b
//     }
//     const multiConst = multiplicacion(2, 1.73)
//     let distancia = parseInt(prompt("Ingrese la distancia en ml"))
//     let corriente = parseInt(prompt("Ingrese la corriente nominal en A"))
//     let voltaje = parseInt(prompt("Ingrese el voltaje entre fases"))
//     for (let i = 0; i < calibres.length; i++) {
//         console.log(calibres[i])
//     }
//     let seccion = parseInt(prompt("Ingrese la seccion transversal del calibre a usar"))
//     let resultado1 = multiConst * distancia * corriente
//     let resultado2 = voltaje * seccion
//     let resultadoFinal = resultado1 / resultado2
//     if (resultadoFinal <= 3) {
//         alert("el resultado de la caida de tension es " + resultadoFinal + " %")
//     } else if (resultadoFinal > 3) {
//         alert("el resultado de la caida de tension es " + resultadoFinal + " % " + " se debera seleccionar otro calibre ")
//     }
// }

// let menu = parseInt(prompt("1-Corriente Electrica Monofasica \n 2-Corriete Electrica Trifasica \n 3-Caida de Tension Monofasica \n 4-Caida de Tension Bifasica \n 5-Caida de Tension Trifasica \n 6-salir"))
// while (menu !== 6) {
//     switch (menu) {
//         case 1:
//             monofasica()
//             break
//         case 2:
//             trifasica()
//             break
//         case 3:
//             caidaDeTension1()
//             break
//         case 4:
//             caidaDeTension2()
//             break
//         case 5:
//             caidaDeTension3()
//             break
//         default:
//             alert("Opcion incorrecta")
//     }
//     menu = parseInt(prompt("1-Corriente Electrica Monofasica \n 2-Corriete Electrica Trifasica \n 3-Caida de Tension Monofasica \n 4-Caida de Tension Bifasica \n 5-Caida de Tension Trifasica \n 6-salir"))
// }

