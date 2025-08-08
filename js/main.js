
document.addEventListener(`DOMContentLoaded`, function () {
    const input = document.querySelectorAll(`numPositivos`);
    input.forEach(input => {
        input.addEventListener(`input`, () => {
            input.value = input.value.replace(/[^0-9]/g, '');
        });
    });
});

//Calculo de coriente electrica Monofasica 
let calcular = document.getElementById("calcular")
let potencia = document.getElementById("potencia")
let voltaje = document.getElementById("voltaje")
const factorDePotencia = 0.9

calcular.onclick = () => {

    if (!potencia.value || !voltaje.value) {
        Swal.fire({
            position: "center-center",
            icon: "info",
            title: "Antes de continuar, ingrese los parametros",
            showConfirmButton: false,
            timer: 2000,
            background: "#000",
            color: "#fff",
            iconColor: "#0099ffff"
        });
        return;
    }
    let resultado = voltaje.value * factorDePotencia
    let resultadoFinal = potencia.value / resultado

    localStorage.setItem("resultado_mono_corriente", JSON.stringify(resultadoFinal));
    let dato = JSON.parse(localStorage.getItem("resultado_mono_corriente"))

    let resultadoCalculo = document.getElementById("resultadoCalculo")
    resultadoCalculo.innerText = "El resultado de la corriente es: \n" + dato.toFixed(2) + " A"
    print.innerText = resultadoCalculo.innerText;

}

limpiar.onclick = () => {
    try {
        localStorage.removeItem("resultado_mono_corriente");

        let resultadoCalculo = document.getElementById("resultadoCalculo")
        resultadoCalculo.innerText = " "
        print.innerText = resultadoCalculo.innerText;

    } catch (error) {
        console.error("Error al limpiar el resultado:", error.message);
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Error al limpiar",
            text: error.message,
            background: "#000",
            color: "#fff",
            iconColor: "#ff0033"
        });
    } finally {
        Swal.fire({
            position: "center-center",
            icon: "success",
            title: "Formulario Limpiado",
            showConfirmButton: false,
            timer: 1500,
            background: "#000",
            color: "#fff",
            iconColor: "#00ffffff"
        });

    }

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
    if (!potencia.value || !voltaje.value) {
        Swal.fire({
            position: "center-center",
            icon: "error",
            title: "No hay datos ingresados",
            showConfirmButton: false,
            timer: 1000,
            background: "#000",
            color: "#fff",
            iconColor: "#ff0000ff"
        });
        return;
    } 
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
    if (!potenciaUno.value || !voltajeUno.value) {
        Swal.fire({
            position: "center-center",
            icon: "info",
            title: "Antes de continuar, ingrese los parametros",
            showConfirmButton: false,
            timer: 2000,
            background: "#000",
            color: "#fff",
            iconColor: "#0099ffff"
        });
        return;
    }
    let resultado = multiConst * voltajeUno.value
    let resultadoFinal1 = potenciaUno.value / resultado

    localStorage.setItem("resultado_tri_corriente", JSON.stringify(resultadoFinal1));
    let datoUno = JSON.parse(localStorage.getItem("resultado_tri_corriente"))

    let resultadoCalculoUno = document.getElementById("resultadoCalculoUno")
    resultadoCalculoUno.innerText = "El resultado de la corriente es: \n" + datoUno.toFixed(2) + " A"
    print.innerText = resultadoCalculoUno.innerText;
}

limpiarUno.onclick = () => {
    try {
        localStorage.removeItem("resultado_tri_corriente");

        let resultadoCalculoUno = document.getElementById("resultadoCalculoUno")
        resultadoCalculoUno.innerText = " "
        print.innerText = resultadoCalculoUno.innerText;
    } catch (error) {
        console.error("Error al limpiar el resultado:", error.message);
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Error al limpiar",
            text: error.message,
            background: "#000",
            color: "#fff",
            iconColor: "#ff0033"
        });
    } finally {
        Swal.fire({
            position: "center-center",
            icon: "success",
            title: "Formulario Limpiado",
            showConfirmButton: false,
            timer: 1500,
            background: "#000",
            color: "#fff",
            iconColor: "#00ffffff"
        });
    }
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
    if (!potenciaUno.value || !voltajeUno.value) {
        Swal.fire({
            position: "center-center",
            icon: "error",
            title: "No hay datos ingresados",
            showConfirmButton: false,
            timer: 1000,
            background: "#000",
            color: "#fff",
            iconColor: "#ff0000ff"
        });
        return;
    } 
    limpiarCamposUno(sectionFormularioUno, limpiarValorUno);

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
