let personas = 2;
let fecha = "";
let hora = "";


// ==========================
// SELECCIONAR PERSONAS
// ==========================

const botonesPersonas = document.querySelectorAll(".persona");

botonesPersonas.forEach(function (boton) {

    boton.addEventListener("click", function () {

        personas = this.dataset.personas;

        botonesPersonas.forEach(function (btn) {
            btn.classList.remove("seleccionado");
        });

        this.classList.add("seleccionado");

        document.getElementById("resumenPersonas").textContent =
            personas + (personas == 1 ? " Persona" : " Personas");

    });

});


// ==========================
// SELECCIONAR FECHA
// ==========================

const botonesFecha = document.querySelectorAll(".fecha");

botonesFecha.forEach(function (boton) {

    boton.addEventListener("click", function () {

        fecha = this.dataset.fecha;

        botonesFecha.forEach(function (btn) {
            btn.classList.remove("seleccionado");
        });

        this.classList.add("seleccionado");

        document.getElementById("resumenFecha").textContent = fecha;

    });

});


// ==========================
// SELECCIONAR HORA
// ==========================

const botonesHora = document.querySelectorAll(".hora");

botonesHora.forEach(function (boton) {

    boton.addEventListener("click", function () {

        hora = this.dataset.hora;

        botonesHora.forEach(function (btn) {
            btn.classList.remove("seleccionado");
        });

        this.classList.add("seleccionado");

        document.getElementById("resumenHora").textContent = hora;

    });

});


// ==========================
// CONFIRMAR RESERVA
// ==========================

document.getElementById("confirmar").addEventListener("click", function () {

    if (fecha === "") {
        alert("Por favor selecciona una fecha.");
        return;
    }

    if (hora === "") {
        alert("Por favor selecciona una hora.");
        return;
    }

    alert(
        "¡Reserva realizada correctamente!\n\n" +
        "Personas: " + personas + "\n" +
        "Fecha: " + fecha + "\n" +
        "Hora: " + hora
    );

});