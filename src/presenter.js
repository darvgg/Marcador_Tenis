import { mostrar_resultado } from "./marcador.js";

const boton_score_1 = document.querySelector("#punto-jugador1");
const boton_score_2 = document.querySelector("#punto-jugador2");
const div = document.querySelector("#resultado_div");

let puntosJugador1 = 0;
let puntosJugador2 = 0;

actualizarMarcador();
// Evento para el botón del Jugador 1
boton_score_1.addEventListener("click", () => {
  puntosJugador1++;
  actualizarMarcador();
});

// Evento para el botón del Jugador 2
boton_score_2.addEventListener("click", () => {
  puntosJugador2++;
  actualizarMarcador();
});

function actualizarMarcador() {
  div.textContent = mostrar_resultado(puntosJugador1, puntosJugador2);
}
