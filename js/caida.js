// let seccionTrans = [
//     { cable: "16", seccion: 1.31 },
//     { cable: "14", seccion: 2.08 },
//     { cable: "12", seccion: 3.31 },
//     { cable: "10", seccion: 5.26 },
//     { cable: "8", seccion: 8.37 },
//     { cable: "6", seccion: 13.30 },
//     { cable: "4", seccion: 21.20 },
//     { cable: "2", seccion: 33.60 },
//     { cable: "1/0", seccion: 53.49 },
//     { cable: "2/0", seccion: 67.43 },
//     { cable: "3/0", seccion: 85.01 },
//     { cable: "4/0", seccion: 107.20 }
// ];

// let seccion = ""; 
// for (let i = 0; i < seccionTrans.length; i++) {
//     seccion += `<option value="${seccionTrans[i].seccion}">${seccionTrans[i].cable}</option>`;
// }

// document.getElementById("cable").innerHTML = seccion;

fetch("../json/calibres.json")
    .then(res => res.json())
    .then(dato => {
        let seccion = "";
        dato.forEach(item => {
            seccion += `<option value="${item.seccion}">${item.cable}</option>`;
        });
        document.getElementById("cable").innerHTML = seccion;
    })

let calcular = document.getElementById("calcular")
let distancia = document.getElementById("distancia")
let corriente = document.getElementById("corriente")
let cable = document.getElementById("cable")
const cuatro = 4
const volt = 127


calcular.onclick = () => {
    if (!distancia.value || !corriente.value || !cable.value) {
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

    let resultado1 = cuatro * distancia.value * corriente.value
    let resultado2 = volt * parseFloat(cable.value)
    let resultadoFinal = resultado1 / resultado2

    localStorage.setItem("resultado", JSON.stringify(resultadoFinal));
    let dato = JSON.parse(localStorage.getItem("resultado"))

    let resultadoCalculo = document.getElementById("resultadoCalculo")
    if (dato <= 3) {
        resultadoCalculo.innerText = "El resultado de la caida de tension es: \n" + dato.toFixed(2) + " %"
        print.innerText = resultadoCalculo
    } else if (dato > 3) {
        resultadoCalculo.innerText = "El resultado de la caida de tension es: " + dato.toFixed(2) + " %,\n " + "se debera elegir otro calibre"
        print.innerText = resultadoCalculo
    }
}

limpiar.onclick = () => {
    try {
        localStorage.removeItem("resultado");

        let resultadoCalculo = document.getElementById("resultadoCalculo")
        resultadoCalculo.innerText = " "
        print.innerText = resultadoCalculo

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
    if (!distancia.value || !corriente.value || !cable.value) {
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


//Caida de tension Bifasica
fetch("../json/calibres.json")
    .then(res => res.json())
    .then(dato => {
        let seccion = "";
        dato.forEach(item => {
            seccion += `<option value="${item.seccion}">${item.cable}</option>`;
        });
        document.getElementById("cableUno").innerHTML = seccion;
    })

let calcularUno = document.getElementById("calcularUno")
let distanciaUno = document.getElementById("distanciaUno")
let corrienteUno = document.getElementById("corrienteUno")
let voltajeUno = document.getElementById("voltajeUno")
let cableUno = document.getElementById("cableUno")
const numeroDos = 2

calcularUno.onclick = () => {
    if (!distanciaUno.value || !corrienteUno.value || !voltajeUno.value || !cableUno.value) {
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
    let resultadoUno = numeroDos * distanciaUno.value * corrienteUno.value
    let resultadoDos = voltajeUno.value * cableUno.value
    let resultadoFinal = resultadoUno / resultadoDos

    localStorage.setItem("resultado", JSON.stringify(resultadoFinal));
    let dato = JSON.parse(localStorage.getItem("resultado"))

    let resultadoCalculoUno = document.getElementById("resultadoCalculoUno")
    if (dato <= 3) {
        resultadoCalculoUno.innerText = "El resultado de la caida de tension es: \n" + dato.toFixed(2) + " %"
        print.innerText = resultadoCalculoUno
    } else if (dato > 3) {
        resultadoCalculoUno.innerText = "El resultado de la caida de tension es: " + dato.toFixed(2) + " %,\n " + "se debera elegir otro calibre"
        print.innerText = resultadoCalculoUno
    }
}

limpiarUno.onclick = () => {
    try {
        localStorage.removeItem("resultado");

        let resultadoCalculoUno = document.getElementById("resultadoCalculoUno")
        resultadoCalculoUno.innerText = " "
        print.innerText = resultadoCalculoUno

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
    if (!distanciaUno.value || !corrienteUno.value || !voltajeUno.value || !cableUno.value) {
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
    limpiarCampos(sectionFormularioUno, limpiarValor);

});


//Caida de tension Trifasica
fetch("../json/calibres.json")
    .then(res => res.json())
    .then(dato => {
        let seccion = "";
        dato.forEach(item => {
            seccion += `<option value="${item.seccion}">${item.cable}</option>`;
        });
        document.getElementById("cableDos").innerHTML = seccion;
    })

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
    if (!distanciaDos.value || !corrienteDos.value || !voltajeDos.value || !cableDos.value) {
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
    let resultado1 = multiConst * distanciaDos.value * corrienteDos.value
    let resultado2 = voltajeDos.value * cableDos.value
    let resultadoFinal = resultado1 / resultado2

    localStorage.setItem("resultado", JSON.stringify(resultadoFinal));
    let dato = JSON.parse(localStorage.getItem("resultado"))

    let resultadoCalculoDos = document.getElementById("resultadoCalculoDos")
    if (dato <= 3) {
        resultadoCalculoDos.innerText = "El resultado de la caida de tension es: " + dato.toFixed(2) + " %"
        print.innerText = resultadoCalculoDos
    } else if (dato > 3) {
        resultadoCalculoDos.innerText = "El resultado de la caida de tension es: " + dato.toFixed(2) + " %,\n " + "se debera elegir otro calibre"
        print.innerText = resultadoCalculoDos
    }
}

limpiarDos.onclick = () => {
    try {
        localStorage.removeItem("resultado");

        let resultadoCalculoDos = document.getElementById("resultadoCalculoDos")
        resultadoCalculoDos.innerText = " "
        print.innerText = resultadoCalculoDos

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
    if (!distanciaDos.value || !corrienteDos.value || !voltajeDos.value || !cableDos.value) {
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






