function monofasica() {
    let potencia = parseInt(prompt("Ingrese la potencia en W"))
    let voltaje = parseInt(prompt("Ingrese el voltaje, 127 o 220 V"))
    let resultado = voltaje * 0.9
    let resultadoFinal = potencia / resultado
    alert("El resultado de corriente es " + resultadoFinal + " A")
}

function trifasica() {
    let potencia = parseInt(prompt("Ingrese la potencia en W"))
    let voltaje = parseInt(prompt("Ingrese el voltaje entre lineas"))
    let resultado = 1.73 * voltaje * 0.9
    let resultadoFinal = potencia / resultado
    alert("El resultado de corriente es " + resultadoFinal + " A")
}

function caidaDeTension1() {
    let distancia = parseInt(prompt("Ingrese la distancia en ml"))
    let corriente = parseInt(prompt("Ingrese la corriente nominal en A"))
    let calibre = parseInt(prompt("Ingrese el calibre del cable a usar"))
    if (calibre == 16) {
        seccion = 1.31
    } else if (calibre == 14) {
        seccion = 2.08
    } else if (calibre == 12) {
        seccion = 3.31
    } else if (calibre == 10) {
        seccion = 5.26
    } else if (calibre == 8) {
        seccion = 8.37
    } else if (calibre == 6) {
        seccion = 13.30
    } else if (calibre == 4) {
        seccion = 21.20
    } else if (calibre == 2) {
        seccion = 33.60
    } else if (calibre == 0) {  //calibre 1/0
        seccion = 53.49
    } else if (calibre == 20) {  //calibre 2/0
        seccion = 67.43
    } else if (calibre == 30) {  //calibre 3/0
        seccion = 85.01
    } else if (calibre == 40) {  //calibre 4/0
        seccion = 107.20
    }else {
        alert ("Opcion incorrecta")
    }
    let resultado1 = 4 * distancia * corriente
    let resultado2 = 127 * seccion
    let resultadoFinal = resultado1 / resultado2
    alert("el resultado de la caida de tension es " + resultadoFinal + " %")
}

function caidaDeTension2() {
    let distancia = parseInt(prompt("Ingrese la distancia en ml"))
    let corriente = parseInt(prompt("Ingrese la corriente nominal en A"))
    let voltaje = parseInt(prompt("Ingrese el voltaje, 127 o 220 V"))
    let calibre = parseInt(prompt("Ingrese el calibre del cable a usar"))
    if (calibre == 16) {
        seccion = 1.31
    } else if (calibre == 14) {
        seccion = 2.08
    } else if (calibre == 12) {
        seccion = 3.31
    } else if (calibre == 10) {
        seccion = 5.26
    } else if (calibre == 8) {
        seccion = 8.37
    } else if (calibre == 6) {
        seccion = 13.30
    } else if (calibre == 4) {
        seccion = 21.20
    } else if (calibre == 2) {
        seccion = 33.60
    } else if (calibre == 0) {  //calibre 1/0
        seccion = 53.49
    } else if (calibre == 20) {  //calibre 2/0
        seccion = 67.43
    } else if (calibre == 30) {  //calibre 3/0
        seccion = 85.01
    } else if (calibre == 40) {  //calibre 4/0
        seccion = 107.20
    }else {
        alert ("Opcion incorrecta")
    }
    let resultado1 = 2 * distancia * corriente
    let resultado2 = voltaje * seccion
    let resultadoFinal = resultado1 / resultado2
    alert("el resultado de la caida de tension es " + resultadoFinal + " %")
}

function caidaDeTension3() {
    let distancia = parseInt(prompt("Ingrese la distancia en ml"))
    let corriente = parseInt(prompt("Ingrese la corriente nominal en A"))
    let voltaje = parseInt(prompt("Ingrese el voltaje entre fases"))
    let calibre = parseInt(prompt("Ingrese el calibre del cable a usar"))
    if (calibre == 16) {
        seccion = 1.31
    } else if (calibre == 14) {
        seccion = 2.08
    } else if (calibre == 12) {
        seccion = 3.31
    } else if (calibre == 10) {
        seccion = 5.26
    } else if (calibre == 8) {
        seccion = 8.37
    } else if (calibre == 6) {
        seccion = 13.30
    } else if (calibre == 4) {
        seccion = 21.20
    } else if (calibre == 2) {
        seccion = 33.60
    } else if (calibre == 0) {  //calibre 1/0
        seccion = 53.49
    } else if (calibre == 20) {  //calibre 2/0
        seccion = 67.43
    } else if (calibre == 30) {  //calibre 3/0
        seccion = 85.01
    } else if (calibre == 40) {  //calibre 4/0
        seccion = 107.20
    }else {
        alert ("Opcion incorrecta")
    }
    let resultado1 = 2 * 1.73 * distancia * corriente
    let resultado2 = voltaje * seccion
    let resultadoFinal = resultado1 / resultado2
    alert("el resultado de la caida de tension es " + resultadoFinal + " %")
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

