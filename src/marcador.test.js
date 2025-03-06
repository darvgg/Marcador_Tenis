import {mostrar_resultado} from "./marcador.js";

describe("Caso 1: Marcador iguales a 0", () => {
  it("deberia mostrar Love - Love", () => {
    expect(mostrar_resultado(0,0)).toEqual("Love - Love");
  });
});
describe("Caso 2: Marcador 15 a 0", () => {
  it("deberia mostrar 15 - 0", () => {
    expect(mostrar_resultado(15,0)).toEqual("15 - 0");
  });
});