var seccionTrans = [1.31, 2.08, 3.31, 5.26, 8.37, 13.30, 21.20, 33.60, 53.49, 67.43, 85.01, 107.20];
var seccion = [];

for (var i = 0; i < seccionTrans.length; i++) {
    seccion += "<option>" + seccionTrans[i] + "</option>"
}
document.getElementById("cable").innerHTML = "<option>" + seccion + "</option>"

let calcular = document.getElementById("calcular")
let distancia = document.getElementById("distancia")
let corriente = document.getElementById("corriente")
//let seccion = document.getElementById("seccion")
const cuatro = 4
const voltaje = 127

calcular.onclick = () => {
    let resultado1 = cuatro * distancia.value * corriente.value
    let resultado2 = voltaje.value * seccion.value
    let resultadoFinal = resultado1 / resultado2

    let resultadoCalculo = document.getElementById("resultadoCalculo")
    resultadoCalculo.innerText = "El resultado de la caida de tension es: " + resultadoFinal + " %"
    print.innerText = resultadoCalculo 

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