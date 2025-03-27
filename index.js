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
function pintarArray(array) {
  return `[${array.join(", ")}]`;
}

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

//ejercicio 15
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

//ejercicio 16
let holaMundo = ["Hola", "Mundo"];

//ejercicio 17
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];

//ejercicio 18
let arrayDeArrays = [
  [756, "nombre"],
  [225, "apellido"],
  [298, "direccion"],
];

//ejercicio 19
function multiplicacion(param1, param2) {
  return param1 * param2;
}

//ejercicio 20
function division(dividendo, divisor) {
  return dividendo / divisor;
}

//ejercicio 21
function esPar(numero) {
  if (typeof numero !== "number") return false;
  return numero % 2 === 0;
}

//ejercicio 22
let arrayFunciones = [suma, resta, multiplicacion];
arrayFunciones[0](param1, param2);
arrayFunciones[1](param1, param2);
arrayFunciones[2](param1, param2);

//ejercicio 23
function ordenarArray2(arrayNums) {
  return arrayNums.sort((a, b) => b - a);
}
//console.log(ordenarArrays(arrayNumeros));

//ejercicio 24
function obtenerImpares(array) {
  const impares = array.filter((num) => num % 2 !== 0);
  return impares;
}

//ejercico 25

function sumarArray(array) {
  return array.reduce((total, actual) => total + actual, 0);
}

//ejercicio 26

function multiplicarArray(array) {
  return array.reduce((total, actual) => total * actual, 1);
}
