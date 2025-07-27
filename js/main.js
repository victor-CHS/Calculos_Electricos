
//Calculo de cooriente electrica Monofasica 
let calcular = document.getElementById("calcular")
let potencia = document.getElementById("potencia")
let voltaje = document.getElementById("voltaje")
const factorDePotencia = 0.9

calcular.onclick = () => {
    let resultado = voltaje.value * factorDePotencia
    let resultadoFinal = potencia.value / resultado

    localStorage.setItem("resultado", JSON.stringify(resultadoFinal));
    let dato = JSON.parse(localStorage.getItem("resultado"))

    let resultadoCalculo = document.getElementById("resultadoCalculo")
    resultadoCalculo.innerText = "El resultado de la corriente es: \n" + dato + " A"
    print.innerText = resultadoCalculo

}

limpiar.onclick = () => {
    localStorage.removeItem("resultado");

    let resultadoCalculo = document.getElementById("resultadoCalculo")
    resultadoCalculo.innerText = " "
    print.innerText = resultadoCalculo
}

const sectionFormulario = document.getElementById("sectionFormulario");
const reiniciarForm = document.getElementById("reiniciarForm");

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

reiniciarForm.addEventListener("click", () => {
    limpiarCampos(sectionFormulario, limpiarValor);

});


//Calculo de corriente electrica trifasica
function multiplicacion(a, b) {
    return a * b
}
const multiConst = multiplicacion(1.73, 0.9)
let calcularUno = document.getElementById("calcularUno")
let potenciaUno = document.getElementById("potenciaUno")
let voltajeUno = document.getElementById("voltajeUno")


calcularUno.onclick = () => {
    let resultado = multiConst * voltajeUno.value
    let resultadoFinal1 = potenciaUno.value / resultado

    localStorage.setItem("resultado", JSON.stringify(resultadoFinal1));
    let datoUno = JSON.parse(localStorage.getItem("resultado"))

    let resultadoCalculoUno = document.getElementById("resultadoCalculoUno")
    resultadoCalculoUno.innerText = "El resultado de la corriente es: \n" + datoUno + " A"
    print.innerText = resultadoCalculoUno
}

limpiarUno.onclick = () => {
    localStorage.removeItem("resultado");

    let resultadoCalculoUno = document.getElementById("resultadoCalculoUno")
    resultadoCalculoUno.innerText = " "
    print.innerText = resultadoCalculoUno
}

const sectionFormularioUno = document.getElementById("sectionFormularioUno");
const reiniciarFormUno = document.getElementById("reiniciarFormUno");

function limpiarCamposUno(form, accion) {
    const elementos = form.elements;
    for (let i = 0; i < elementos.length; i++) {
        const campo = elementos[i];
        if (campo.tagName !== 'BUTTON' && campo.type !== 'submit') {
            accion(campo);
        }
    }
}

function limpiarValorUno(campo) {
    campo.value = '';
}

reiniciarFormUno.addEventListener("click", () => {
    limpiarCamposUno(sectionFormularioUno, limpiarValorUno);
    //alert("Formulario limpiado");
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
