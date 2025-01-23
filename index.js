// ##arrays##
//ejercicio 1

let arrayVacio = [];

//ejercicio 2

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//ejercicio 3

let arrayNumerosPares = [0, 2, 4, 6, 8];

//ejercicio 4

let arrayBidimensional = [
  [0, 1, 2],
  ["a", "b", "c"],
];

// ##Funciones##
//ejercicio 5

function suma(a, b) {
  return a + b;
}

//ejercicio 6

function potenciacion(num1, num2) {
  return num1 ** num2;
}

//ejercicio 7

function separarPalabras(cadena) {
  return cadena.split(" ");
}

//ejercicio 8

function repetirString(cadena, rep) {
  return cadena.repeat(rep);
}

//ejercicio 9

function esPrimo(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// ##Arrays y funciones##
//ejercicio 10

function ordenarArray(array) {
  const arrayOrdenado = array.sort((a, b) => a - b);
  return arrayOrdenado;
}

//ejercicio 11

function obtenerPares(array) {
  const pares = array.filter((num) => num % 2 === 0);
  return pares;
}

//ejercicio 12
//no entendi que es lo que realmente se pide
// function pintarArray(array) {
//   return `[${array.join(", ")}]`;
// }

// console.log(pintarArray([1, 2, 3, 4, 5]));

//ejercicio 13

function arrayMapi(array, func) {
  return array.map((elemento) => func(elemento));
}
/*function doble(num) {
  return num * 2;
}
let array1 = arrayMapi([1, 2, 3, 4, 5], doble);
console.log(array1);*/

//ejercicio 14

function eliminarDuplicados(array) {
  return array.filter((elemento, index) => array.indexOf(elemento) === index);
}

//ejercico 25

function sumarArray(array) {
  return array.reduce((total, actual) => total + actual, 0);
}

//ejercicio 26

function multiplicarArray(array) {
  return array.reduce((total, actual) => total * actual, 1);
}
