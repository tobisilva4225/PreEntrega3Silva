let reservas = [];
let form = document.getElementById("formulario");

let mostrar = document.getElementById("divReservas");

window.onload = function () {
  let valorGuardado = localStorage.getItem("reservaGuardada");
  if (valorGuardado) {
    reservas = JSON.parse(valorGuardado);

    mostrarReserva();
  }
};

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre");
  let personas = document.getElementById("personas");
  let fecha = document.getElementById("fecha");
  let turno = document.getElementById("turno");
  let dia = document.getElementById("dia");
  let telefono = document.getElementById("telefono");

  let reservaNombre = nombre.value;
  let reservaPersonas = personas.value;
  let reservaFecha = fecha.value;
  let reservaTurno = turno.value;
  let reservaDia = dia.value;
  let reservaTelefono = telefono.value;

  nuevaReserva = {
    nombre: reservaNombre,
    personas: reservaPersonas,
    fecha: reservaFecha,
    turno: reservaTurno,
    dia: reservaDia,
    telefono: reservaTelefono,
  };

  localStorage.setItem("reservaGuardada", JSON.stringify(reservas));

  function borrar() {
    nombre.value = "";
    personas.value = "";
    fecha.value = "";
    turno.value = "";
    dia.value = "";
    telefono.value = "";
  }

  if (reservaNombre === "") {
    alert("el nombre es obligatorio");
    document.getElementById("nombre").focus();
  } else if (reservaPersonas === "") {
    alert("el numero de comenzales es obligatorio");
    document.getElementById("personas").focus();
  } else if (reservaFecha === "") {
    alert("la fecha es obligatoria");
    document.getElementById("fecha").focus();
  } else if (reservaDia === "") {
    alert("el dia es obligatorio");
    document.getElementById("dia").focus();
  } else if (reservaTelefono === "") {
    alert("el telefono es obligatorio");
    document.getElementById("telefono").focus();
  } else if (reservaTurno === "") {
    alert("el turno es obligatorio");
    document.getElementById("turno").focus();
  } else if (reservaPersonas == 1) {
    switch (reservaDia) {
      case "domingo":
        alert("¡El domingo estaremos cerrados, elige otro dia!");
        break;
      case "lunes":
        alert("¡El lunes estaremos cerrados, elige otro dia!");
        break;
      default:
        reservas.push(nuevaReserva);
        mostrarReserva();
        alert(
          `¡Perfecto ${reservaNombre}, Te esperamos el ${reservaDia} a las ${reservaTurno}!`
        );
        borrar();
        break;
    }
  } else if (reservaPersonas < 10 && reservaPersonas > 1) {
    switch (reservaDia) {
      case "domingo":
        alert("¡El domingo estaremos cerrados, elige otro dia!");
        break;
      case "lunes":
        alert("¡El lunes estaremos cerrados, elige otro dia!");
        break;
      default:
        reservas.push(nuevaReserva);
        mostrarReserva();
        alert(
          `¡Perfecto ${reservaNombre}, Los esperamos el ${reservaDia} a las ${reservaTurno}!`
        );
        borrar();
        break;
    }
  } else if (reservaPersonas >= 10) {
    alert("Para reservas mayores a 10 comenzales, consultar disponibilidad.");
  } else {
    alert("Corroborar que los campos solicitados esten llenos y bien escritos");
  }
});

let mostrarReserva = () => {
  mostrar.innerHTML = "";

  if (reservas.length > 0) {
    mostrar.innerHTML += `<div class="d-flex flex-wrap">`;
    reservas.forEach(function (nuevaReserva) {
      mostrar.innerHTML += `<div class="border rounded-3 m-3 p-3 bg-black opacity-75" ><spam class="text-decoration-underline">Nueva reserva</spam> </br>Nombre: ${nuevaReserva.nombre}</br> Turno: ${nuevaReserva.turno}</br>Dia: ${nuevaReserva.dia} ${nuevaReserva.fecha}</br>Personas: ${nuevaReserva.personas}</br>Telefono: ${nuevaReserva.telefono}</div>`;
    });
    mostrar.innerHTML += "</div>";
  }
};
