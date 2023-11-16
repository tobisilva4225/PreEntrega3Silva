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

crearReserva(
  prompt("ingresar nombre y apellido"),
  prompt("¿Turno 20hs o 22hs? (ingresar tal cual aparece en este mensaje)"),
  parseInt(prompt("¿Cuantos comenzales serán? ingresar numeros")),
  prompt("Ingresar dia (lunes, martes...)"),
  prompt("Ingresar fecha (ejemplo 02/10)"),
  prompt("Ingresar numero de telefono")
);

crearReserva(
  prompt("ingresar nombre y apellido"),
  prompt("¿Turno 20hs o 22hs? (ingresar tal cual aparece en este mensaje)"),
  parseInt(prompt("¿Cuantos comenzales serán? ingresar numeros")),
  prompt("Ingresar dia (lunes, martes...)"),
  prompt("Ingresar fecha (ejemplo 02/10)"),
  prompt("Ingresar numero de telefono")
);
crearReserva(
  prompt("ingresar nombre y apellido"),
  prompt("¿Turno 20hs o 22hs? (ingresar tal cual aparece en este mensaje)"),
  parseInt(prompt("¿Cuantos comenzales serán? ingresar numeros")),
  prompt("Ingresar dia (lunes, martes...)"),
  prompt("Ingresar fecha (ejemplo 02/10)"),
  prompt("Ingresar numero de telefono")
);

// Mostrar todas las reservas
mostrarReservas();
