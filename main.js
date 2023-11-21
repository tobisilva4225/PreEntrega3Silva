//Crear un sistema de reservas para un resto en el cual tengo disponibles tres salones (ABAJO, ARRIBA, PATIO)
//Tengo dos turnos, Uno 20hs y otro 22hs
//SALON ABAJO: Mesas de 4(4), Mesas de 2(6).
//SALON ARRIBA: Mesas de 2(6), Mesa de 8(1).
//SALON PATIO: Mesas de 2(4), Mesas de 4(2).
//solicitar nombre de la reserva, numero de comenzales, dia, hora y telefono.

// Constructor para la Reserva
function Reserva(nombre, hora, personas, dia, fecha, telefono) {
  this.nombre = nombre;
  this.hora = hora;
  this.personas = personas;
  this.dia = dia;
  this.fecha = fecha;
  this.telefono = telefono;
}

// Array para almacenar todas las reservas
let reservas = [];

// Función para crear una nueva reserva
function crearReserva(nombre, hora, personas, dia, fecha, telefono) {
  let nuevaReserva = new Reserva(nombre, hora, personas, dia, fecha, telefono);
  reservas.push(nuevaReserva);

  if (personas === 1 && nombre != "") {
    switch (dia) {
      case "domingo":
        alert("¡El domingo estaremos cerrados!");
        break;
      case "lunes":
        alert("¡El lunes estaremos cerrados!");
        break;
      default:
        alert(`¡Perfecto ${nombre}, Te esperamos el ${dia} a las ${hora}!`);
        break;
    }
  } else if (personas < 10 && nombre != "") {
    switch (dia) {
      case "domingo":
        alert("¡El domingo estaremos cerrados!");
        break;
      case "lunes":
        alert("¡El lunes estaremos cerrados!");
        break;
      default:
        alert(`¡Perfecto ${nombre}, Los esperamos el ${dia} a las ${hora}!`);
        break;
    }
  } else if (personas >= 10) {
    alert("Para reservas mayores a 10 comenzales, consultar disponibilidad.");
  } else {
    alert("Corroborar que los campos solicitados esten llenos y bien escritos");
  }
}

// Función para mostrar todas las reservas

function mostrarReservas() {
  for (let i = 0; i < reservas.length; i++) {
    console.log(
      "Reserva a nombre de " +
        reservas[i].nombre +
        " para las " +
        reservas[i].hora +
        " el dia " +
        reservas[i].dia +
        " " +
        reservas[i].fecha +
        " para " +
        reservas[i].personas +
        " personas." +
        " Telefono: " +
        reservas[i].telefono
    );
  }
}

// Crear reservas

let reservar = prompt("¿desea realizar una reserva? (si,no...) ");
switch (reservar) {
  case "si":
    crearReserva(
      prompt("ingresar nombre y apellido"),
      prompt("¿Turno 20hs o 22hs? (ingresar tal cual aparece en este mensaje)"),
      parseInt(prompt("¿Cuantos comenzales serán? ingresar numeros")),
      prompt("Ingresar dia (lunes, martes...)"),
      prompt("Ingresar fecha (ejemplo 02/10)"),
      prompt("Ingresar numero de telefono")
    );
    break;
  case "no":
    alert("Que tenga buen dia!");
    break;
}

// Mostrar todas las reservas
mostrarReservas();

//-----------------------SEGUNDA PRUEBA-----------------------

/* let form = document.getElementById("formulario");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let nombre = document.getElementById("nombre").value;
  let personas = document.getElementById("personas").value;
  let fecha = document.getElementById("fecha").value;
  let turno = document.getElementById("turno").value;
  let dia = document.getElementById("dia").value;
  let telefono = document.getElementById("telefono").value;

  function borrarDatos() {
    document.getElementById("nombre").value = "";
    document.getElementById("personas").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("dia").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("turno").value = "";
    document.getElementById("nombre").focus();
  }

  function mostrarReservas() {
    for (let i = 0; i < reservas.length; i++) {
      console.log(
        "Reserva a nombre de " +
          nombre +
          " para las " +
          turno +
          " el dia " +
          dia +
          " " +
          fecha +
          " para " +
          personas +
          " personas. " +
          " Telefono: " +
          telefono +
          "."
      );
      borrarDatos();
    }
  }

  function Reserva(nombre, turno, personas, dia, fecha, telefono) {
    this.nombre = nombre;
    this.hora = turno;
    this.personas = personas;
    this.dia = dia;
    this.fecha = fecha;
    this.telefono = telefono;
  }

  let reservas = [];

  function crearReserva(nombre, turno, personas, dia, fecha, telefono) {
    let nuevaReserva = new Reserva(
      nombre,
      turno,
      personas,
      dia,
      fecha,
      telefono
    );
    reservas.push(nuevaReserva);
  }
  if (nombre === "") {
    alert("el nombre es obligatorio");
    document.getElementById("nombre").focus();
  } else if (personas === "") {
    alert("el numero de comenzales es obligatorio");
    document.getElementById("personas").focus();
  } else if (fecha === "") {
    alert("la fecha es obligatorio");
    document.getElementById("fecha").focus();
  } else if (dia === "") {
    alert("el dia es obligatorio");
    document.getElementById("dia").focus();
  } else if (telefono === "") {
    alert("el telefono es obligatorio");
    document.getElementById("telefono").focus();
  } else if (turno === "") {
    alert("el turno es obligatorio");
    document.getElementById("turno").focus();
  } else if (personas === 1) {
    switch (dia) {
      case "domingo":
        alert("¡El domingo estaremos cerrados, elige otro dia!");
        break;
      case "lunes":
        alert("¡El lunes estaremos cerrados, elige otro dia!");
        break;
      default:
        crearReserva();
        mostrarReservas();
        alert(`¡Perfecto ${nombre}, Te esperamos el ${dia} a las ${turno}!`);
        break;
    }
  } else if (personas < 10) {
    switch (dia) {
      case "domingo":
        alert("¡El domingo estaremos cerrados, elige otro dia!");
        break;
      case "lunes":
        alert("¡El lunes estaremos cerrados, elige otro dia!");
        break;
      default:
        crearReserva();
        mostrarReservas();
        alert(`¡Perfecto ${nombre}, Los esperamos el ${dia} a las ${turno}!`);
        break;
    }
  } else if (personas >= 10) {
    alert("Para reservas mayores a 10 comenzales, consultar disponibilidad.");
  } else {
    alert("Corroborar que los campos solicitados esten llenos y bien escritos");
  }
});
 */
