import {mostrar_resultado} from "./marcador.js";

describe("Marcador iguales a 0", () => {
  it("deberia mostrar Love - Love", () => {
    expect(mostrar_resultado(0,0)).toEqual("Love - Love");
  });
});