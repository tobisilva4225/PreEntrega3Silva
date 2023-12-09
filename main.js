let reservas = [];
let mostrarForm = document.getElementById("mostrarForm");
let divReservar = document.getElementById("divReservar");

function mostrarInput() {
  divReservar.innerHTML = `
<input
class="btn btn-dark btn-lg  border"
type="submit"
value="Reservar"
id="reservar"
/>`;
}
mostrarInput();
let reservar = document.getElementById("reservar");
reservar.addEventListener("click", function () {
  mostrarForm.innerHTML = `

  <div class="contact-wrapper animated bounceInUp" id="formulario">
        <div class="contact-form">
          <h3>Reservar</h3>
          <form action="">
            <p>
              <label>Nombre completo</label>
              <input type="text" name="fullname" id="nombre" />
            </p>
            <p>
              <label>Personas</label>
              <input type="number" name="Personas" id="personas" />
            </p>
            <p>
              <label>Fecha</label>
              <input type="date" name="Fecha" id="fecha" />
            </p>
            <p>
              <label>Dia</label>
              <input
                type="text"
                name="Dia"
                placeholder="lunes, martes..."
                id="dia"
              />
            </p>
            <p>
              <label>Turno</label>
              <input
                type="text"
                placeholder="20hs o 22hs"
                name="Turno"
                id="turno"
              />
            </p>
            <p>
              <label>Telefono</label>
              <input
                type="number"
                placeholder="223123456"
                name="Telefono"
                id="telefono"
              />
            </p>
            <p class="block">
              <label>¿Alguna especificacion?</label>
              <textarea name="message" id="mensaje" rows="3"></textarea>
            </p>
            <p class="block">
              <button id="enviar">Enviar</button>
            </p>
          </form>
        </div>
        <div class="contact-info">
          <h4>Mas Info</h4>
          <ul>
            <li><i class="fas fa-map-marker-alt"></i> Casteli 2720</li>
            <li><i class="fas fa-phone"></i> (223) 123456789</li>
            <li>
              <i class="fas fa-envelope-open-text"></i> contact@website.com
            </li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            provident ipsam necessitatibus repellendus?
          </p>
          <p>Company.com</p>
        </div>
      </div>`;

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
    let mensaje = document.getElementById("mensaje");

    let reservaNombre = nombre.value;
    let reservaPersonas = personas.value;
    let reservaFecha = fecha.value;
    let reservaTurno = turno.value;
    let reservaDia = dia.value;
    let reservaTelefono = telefono.value;
    let reservaMensaje = mensaje.value;

    nuevaReserva = {
      nombre: reservaNombre,
      personas: reservaPersonas,
      fecha: reservaFecha,
      turno: reservaTurno,
      dia: reservaDia,
      telefono: reservaTelefono,
      mensaje: reservaMensaje,
    };
    localStorage.setItem("reservaGuardada", JSON.stringify(reservas));

    if (reservaNombre === "") {
      Swal.fire({
        icon: "warning",
        title: "Error",
        text: "El nombre es obligatorio!",
      });
      document.getElementById("nombre").focus();
    } else if (reservaPersonas === "") {
      Swal.fire({
        icon: "warning",
        title: "Error",
        text: "El numero de comenzales es obligatorio!",
      });
      document.getElementById("personas").focus();
    } else if (reservaFecha === "") {
      Swal.fire({
        icon: "warning",
        title: "Error",
        text: "la fecha es obligatoria",
      });
      document.getElementById("fecha").focus();
    } else if (reservaDia === "") {
      Swal.fire({
        icon: "warning",
        title: "Error",
        text: "el dia es obligatorio",
      });
      document.getElementById("dia").focus();
    } else if (reservaTelefono === "") {
      Swal.fire({
        icon: "warning",
        title: "Error",
        text: "el telefono es obligatorio",
      });
      document.getElementById("telefono").focus();
    } else if (reservaTurno === "") {
      Swal.fire({
        icon: "warning",
        title: "Error",
        text: "el turno es obligatorio",
      });
      document.getElementById("turno").focus();
    } else if (reservaPersonas == 1) {
      switch (reservaDia) {
        case "domingo":
          Swal.fire({
            icon: "warning",
            title: "Error",
            text: "¡El domingo estaremos cerrados, elige otro dia!",
          });
          document.getElementById("dia").focus();
          break;
        case "lunes":
          Swal.fire({
            icon: "warning",
            title: "Error",
            text: "¡El lunes estaremos cerrados, elige otro dia!",
          });
          document.getElementById("dia").focus();
          break;
        default:
          reservas.push(nuevaReserva);
          mostrarReserva();
          Swal.fire({
            icon: "success",
            title: "",
            text: `¡Perfecto ${reservaNombre}, Te esperamos el ${reservaDia} a las ${reservaTurno}!`,
          });

          mostrarForm.innerHTML = "";

          reservar.value = "¿desea realizar otra reserva?";
          break;
      }
    } else if (reservaPersonas < 10 && reservaPersonas > 1) {
      switch (reservaDia) {
        case "domingo":
          Swal.fire({
            icon: "warning",
            title: "Error",
            text: "¡El domingo estaremos cerrados, elige otro dia!",
          });
          document.getElementById("dia").focus();
          break;
        case "lunes":
          Swal.fire({
            icon: "warning",
            title: "Error",
            text: "¡El lunes estaremos cerrados, elige otro dia!",
          });
          document.getElementById("dia").focus();
          break;
        default:
          reservas.push(nuevaReserva);
          mostrarReserva();
          Swal.fire({
            icon: "success",
            title: "",
            text: `¡Perfecto ${reservaNombre}, Los esperamos el ${reservaDia} a las ${reservaTurno}!`,
          });
          mostrarForm.innerHTML = "";
          reservar.value = "¿desea realizar otra reserva?";
          break;
      }
    } else if (reservaPersonas >= 10) {
      Swal.fire({
        icon: "warning",
        title: "Error",
        text: "Para reservas mayores a 10 comenzales, consultar disponibilidad.",
      });
    } else {
      Swal.fire({
        icon: "warning",
        title: "Error",
        text: "Corroborar que los campos solicitados esten llenos y bien escritos",
      });
    }
  });

  let imagenes = [
    "assets/1.jpg",
    "assets/2.jpg",
    "assets/3.jpg",
    "assets/4.jpg",
    "assets/5.jpg",
    "assets/6.jpg",
    "assets/7.jpg",
    "assets/8.jpg",
    "assets/9.jpg",
    "assets/10.jpg",
    "assets/11.jpg",
    "assets/12.jpg",
    "assets/13.jpg",
    "assets/14.jpg",
    "assets/15.jpg",
    "assets/16.jpg",
  ];

  function obtenerImagenAleatoria() {
    let indiceAleatorio = Math.floor(Math.random() * imagenes.length);
    return imagenes[indiceAleatorio];
  }

  /* let imagenAleatoria = obtenerImagenAleatoria(); */

  let mostrarReserva = () => {
    mostrar.innerHTML = "";

    if (reservas.length > 0) {
      mostrar.innerHTML += `<div class="d-flex align-items-center justify-content-center flex-wrap">`;
      reservas.forEach(function (nuevaReserva) {
        mostrar.innerHTML += `
        <div class="tarj">
        <div class="face front">
        <img src=${obtenerImagenAleatoria()} alt="corte" />
        <h3>Nueva Reserva</h3>
        </div>
        <div class="face back " ><h3>Nueva reserva</h3> <p> </br>Nombre: ${
          nuevaReserva.nombre
        }</br> Turno: ${nuevaReserva.turno}</br>Dia: ${
          nuevaReserva.dia
        } </br>Fecha: ${nuevaReserva.fecha}</br>Personas: ${
          nuevaReserva.personas
        }</br>Telefono: ${nuevaReserva.telefono}</br>Especificaciones: ${
          nuevaReserva.mensaje
        }</p></div></div>
        `;
      });
      mostrar.innerHTML += "</div>";
    }
  };
});
