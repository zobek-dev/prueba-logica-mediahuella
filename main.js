/********************** *
Siga las instrucciones de cada enunciado y recuerde que la funcion debe llevar un return para pasar a los tests
¡Buena suerte!
**************************************************************************************************************/ 

//1. La función es Palindromo debe retornar true si un string es palíndromo y false si no lo es. es una palabra o frase que se lee igual en un sentido que en otro1​ (por ejemplo; "ana", "anna", "otto", "anita lava la tina")
function esPalindromo(str){
  // Escribe el código aquí
  const arr = Array.from(str.trim()) //puede ser arr.split("")
  const reverse= arr.filter(el => el != ' ').reverse().join('') //quitamos los espacios en blanco e invertimos la cadena
  return str.replace(/\s+/g, '') === reverse
}

//2. Dado un string, la funcion contadorPalabras debe retornar la cantidad de palabras que contiene el string que ingresa. Ej: "Hola soy goku" = 3, "   Hola tengo 3 años de experiencia en javascript      " = 8, "  El lenguaje C    es      un lenguaje   compilado     " = 7

function contadorPalabras(str){
  // Escribe el codigo aquí
  const arr = str.replace(/\s+/g, ' ').trim().split(' ')
  return arr.length
} 

function caracterRepetido(string, char){
  //Escribe el codigo aqui
  let count = 0
  if(char.length > 1){
    return count
  }
  const arr = string.split('')
  arr.forEach(el => {
    if(el === char) count += 1 
  })
  return count
} 

console.log(caracterRepetido('aBssdfTassdaaaaffdf', 'a'))
console.log(caracterRepetido('aBssdfTassdaaaaffdf', 'B'))
console.log(caracterRepetido('aBssdfTassdaaaaffdf', 'aB'))
 
module.exports = { esPalindromo, contadorPalabras, caracterRepetido };