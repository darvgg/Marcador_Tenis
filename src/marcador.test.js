import {mostrar_resultado} from "./marcador.js";

describe("Caso 1: Marcador iguales a 0", () => {
  it("deberia mostrar Love - Love", () => {
    expect(mostrar_resultado(0,0)).toEqual("Love - Love");
  });
});
describe("Caso 2: Marcador 15 a 0", () => {
  it("deberia mostrar 15 - 0", () => {
    expect(mostrar_resultado(1,0)).toEqual("15 - 0");
  });
});
describe("Caso 3: Marcador 30 a 0", () => {
  it("deberia mostrar 30 - 0", () => {
    expect(mostrar_resultado(2,0)).toEqual("30 - 0");
  });
});

describe("Caso 4: Marcador 40 a 0", () => {
  it("deberia mostrar 40 - 0", () => {
    expect(mostrar_resultado(3,0)).toEqual("40 - 0");
  });
});

describe("Caso 5: Marcador 0 a 15", () => {
  it("deberia mostrar 0 - 15", () => {
    expect(mostrar_resultado(0,1)).toEqual("0 - 15");
  });
});