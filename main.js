//Crear un sistema de reservas para un resto en el cual tengo disponibles tres salones (ABAJO, ARRIBA; PATIO)
//Tengo dos turnos, Uno 20hs y otro 22hs
//SALON ABAJO: Mesas de 4(4), Mesas de 2(6).
//SALON ARRIBA: Mesas de 2(6), Mesa de 8(1).
//SALON PATIO: Mesas de 2(4), Mesas de 4(2).
//solicitar nombre de la reserva, numero de comenzales, dia y hora
function reserva() {
  let nombre = prompt("Ingresa tu nombre!");
  let numeroPersonas = parseInt(prompt("¿Cuantos comenzales serán?"));
  let dia = prompt("Ingresar dia");
  let hora = prompt("¿Turno 20hs o 22hs?");
  if (numeroPersonas === 1 && nombre != "") {
    switch (dia) {
      case "domingo":
        alert("¡estaremos cerrados!");
        break;
      case "lunes":
        alert("¡estaremos cerrados!");
        break;
      default:
        alert(`¡Perfecto ${nombre}, Te esperamos el ${dia} a las ${hora}!`);
        break;
    }
  } else if (numeroPersonas < 10 && nombre != "") {
    switch (dia) {
      case "domingo":
        alert("¡estaremos cerrados!");
        break;
      case "lunes":
        alert("¡estaremos cerrados!");
        break;
      default:
        alert(`¡Perfecto ${nombre}, Los esperamos el ${dia} a las ${hora}!`);
        break;
    }
  } else if (numeroPersonas >= 10) {
    alert("Consultar disponibilidad.");
  } else {
    alert("Ingresar valores validos");
  }
}

let reservas = [
  { nombre: "Juan", hora: "20hs", personas: 5 },
  { nombre: "Maria", hora: "20hs", personas: 3 },
  { nombre: "Fernando", hora: "22hs", personas: 2 },
  { nombre: "Agustin", hora: "20hs", personas: 6 },
  { nombre: "Gabriel", hora: "22hs", personas: 2 },
];

for (let i = 0; i < reservas.length; i++) {
  let reserva = reservas[i];
  console.log(
    `Reserva a nombre de ${reserva.nombre} a las ${reserva.hora} para ${reserva.personas} personas`
  );
}
/* 
reserva(); */

function Reserva(nombre, hora, personas) {
  this.nombre = nombre;
  this.hora = hora;
  this.personas = personas;
  this.mensaje = function () {
    console.log("Hola " + nombre + " te esperamos a las " + hora);
  };
}

const reserva1 = new Reserva("juan", "20hs", 5);
const reserva2 = new Reserva("maria", "20hs", 3);
const reserva3 = new Reserva("fernando", "22hs", 2);
const reserva4 = new Reserva("agustin", "20hs", 6);

console.log(reserva1.mensaje());
