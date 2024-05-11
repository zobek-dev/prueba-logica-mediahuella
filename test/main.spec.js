const main = require("../main.js");

// console.log(palindromeChecker("omo")); // es palindromo
describe('Palíndromo', () => {
  test('la palabra "oso" es palindromo', ()=>{
    expect(main.esPalindromo("oso")).toBe(true);
  });
  test('la palabra "hola" no es palindromo', ()=>{
    expect(main.esPalindromo("hola")).toBe(false);
  });
  test('la palabra "anilina" es palindromo', ()=>{
    expect(main.esPalindromo("anilina")).toBe(true);
  });
  test('la frase "anita lava la tina" es palindromo', ()=>{
    expect(main.esPalindromo("anita lava la tina")).toBe(true);
  });
})


describe("Contador de Palabras", () => {
  test('El string "Hola soy Goku" tiene 3 palabras', () => {
    expect(main.contadorPalabras("Hola soy Goku")).toBe(3)
  });
  test('El string " Javascript es un lenguaje interpretado " tiene 5 palabras', () => {
    expect(main.contadorPalabras(" Javascript es un lenguaje interpretado ")).toBe(5)
  });
  test('El string "  El lenguaje C    es      un lenguaje   compilado     " tiene 7 palabras', () => {
    expect(main.contadorPalabras("  El lenguaje C    es      un lenguaje   compilado     ")).toBe(7)
  });
})



describe("Contador de letras", () => {
  test('En el string "aBssdfTassdaaaaffdf" a esta contenido "a" 6 veces', () => {
    expect(main.caracterRepetido("aBssdfTassdaaaaffdf", "a")).toBe(6)
  })
  test('En el string "aBssdfTassdaaaaffdf" a esta contenido "b" 1 vez', () => {
    expect(main.caracterRepetido("aBssdfTassdaaaaffdf", "B")).toBe(1)
  })
  test('En el string "aBssdfTassdaaaaffdf" a esta contenido "aB" 0 vez', () => {
    expect(main.caracterRepetido("aBssdfTassdaaaaffdf", "aB")).toBe(0)
  })         
})