function monofasica() {
    const factorDePotencia = 0.9
    let potencia = parseFloat(prompt("Ingrese la potencia en W"))
    let voltaje = parseInt(prompt("Ingrese el voltaje, 127 o 220 V"))
    let resultado = voltaje * factorDePotencia
    let resultadoFinal = potencia / resultado
    alert("El resultado de corriente es " + resultadoFinal + " A")
}

function trifasica() {
    function multiplicacion(a, b) {
        return a * b
    }
    const multiConst = multiplicacion(1.73, 0.9)
    let potencia = parseInt(prompt("Ingrese la potencia en W"))
    let voltaje = parseInt(prompt("Ingrese el voltaje entre lineas"))
    let resultado = multiConst * voltaje
    let resultadoFinal = potencia / resultado
    alert("El resultado de corriente es " + resultadoFinal + " A")
}

var calibres = ["16 = 1.31", "14 = 2.08", "12 = 3.31", "10 = 5.26", "8 = 8.37", "6 = 13.30", "4 = 21.20", "2 = 33.60", "1/0 = 53.49", "2/0 = 67.43", "3/0 = 85.01", "4/0 = 107.20"];

function caidaDeTension1() {
    const cuatro = 4
    const voltaje = 127
    let distancia = parseInt(prompt("Ingrese la distancia en ml"))
    let corriente = parseInt(prompt("Ingrese la corriente nominal en A"))
    for (let i = 0; i < calibres.length; i++) {
        console.log(calibres[i])
    }
    let seccion = parseInt(prompt("Ingrese la seccion transversal del calibre a usar"))
    let resultado1 = cuatro * distancia * corriente
    let resultado2 = voltaje * seccion
    let resultadoFinal = resultado1 / resultado2
    if (resultadoFinal <= 3) {
        alert("el resultado de la caida de tension es " + resultadoFinal + " %")
    } else if (resultadoFinal > 3) {
        alert("el resultado de la caida de tension es " + resultadoFinal + " % " + " se debera seleccionar otro calibre ")
    }
}

function caidaDeTension2() {
    const numeroDos = 2
    let distancia = parseInt(prompt("Ingrese la distancia en ml"))
    let corriente = parseInt(prompt("Ingrese la corriente nominal en A"))
    let voltaje = parseInt(prompt("Ingrese el voltaje, 127 o 220 V"))
    for (let i = 0; i < calibres.length; i++) {
        console.log(calibres[i])
    }
    let seccion = parseInt(prompt("Ingrese la seccion transversal del calibre a usar"))
    let resultado1 = numeroDos * distancia * corriente
    let resultado2 = voltaje * seccion
    let resultadoFinal = resultado1 / resultado2
    if (resultadoFinal <= 3) {
        alert("el resultado de la caida de tension es " + resultadoFinal + " %")
    } else if (resultadoFinal > 3) {
        alert("el resultado de la caida de tension es " + resultadoFinal + " % " + " se debera seleccionar otro calibre ")
    }
}

function caidaDeTension3() {
    const numeroDos = 2
    const raizCuadrada = 1.73
    let distancia = parseInt(prompt("Ingrese la distancia en ml"))
    let corriente = parseInt(prompt("Ingrese la corriente nominal en A"))
    let voltaje = parseInt(prompt("Ingrese el voltaje entre fases"))
    for (let i = 0; i < calibres.length; i++) {
        console.log(calibres[i])
    }
    let seccion = parseInt(prompt("Ingrese la seccion transversal del calibre a usar"))
    let resultado1 = numeroDos * raizCuadrada * distancia * corriente
    let resultado2 = voltaje * seccion
    let resultadoFinal = resultado1 / resultado2
    if (resultadoFinal <= 3) {
        alert("el resultado de la caida de tension es " + resultadoFinal + " %")
    } else if (resultadoFinal > 3) {
        alert("el resultado de la caida de tension es " + resultadoFinal + " % " + " se debera seleccionar otro calibre ")
    }
}

let menu = parseInt(prompt("1-Corriente Electrica Monofasica \n 2-Corriete Electrica Trifasica \n 3-Caida de Tension Monofasica \n 4-Caida de Tension Bifasica \n 5-Caida de Tension Trifasica \n 6-salir"))
while (menu !== 6) {
    switch (menu) {
        case 1:
            monofasica()
            break
        case 2:
            trifasica()
            break
        case 3:
            caidaDeTension1()
            break
        case 4:
            caidaDeTension2()
            break
        case 5:
            caidaDeTension3()
            break
        default:
            alert("Opcion incorrecta")
    }
    menu = parseInt(prompt("1-Corriente Electrica Monofasica \n 2-Corriete Electrica Trifasica \n 3-Caida de Tension Monofasica \n 4-Caida de Tension Bifasica \n 5-Caida de Tension Trifasica \n 6-salir"))
}

