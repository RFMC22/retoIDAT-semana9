/* ================ RETO SEMANAL I ================ */
//ejercicio 1
let num = Number(prompt('Ingresa un numero positivo o negativo'));

if (num === 0) {
  alert(`${num} es un numero neutro`)
} else if (num < 0) {
  alert(`${num} es un numero negativo`)
}else{
  alert(`${num} es un numero positivo`)
}

//ejercicio 2
let firstNum = Number(prompt('ingresa el 1er numero'));
let secondNum = Number(prompt('ingresa el 2do numero'));

if (firstNum < secondNum) {
  alert(`${firstNum} es menor que ${secondNum}`);
} else{
  alert(`${secondNum} es menor que ${firstNum}`);
}

//ejercicio 3
let numOne = Number(prompt('Ingresar un numero'));
if (numOne % 2 === 0) {
  alert(`${numOne} numero es divisible entre 2`);
}else{
  alert(`${numOne} numero no es divisible entre 2`);
}

//ejercicio 4
let factorial = Number(prompt('Ingresar un numero para obtener su factorial'));
let contador = 1;
let result = 1;
while (contador <= factorial) {
  result *= contador;
  contador++
}
alert(`el factorial de ${factorial} es ${result}`);

//ejercicio 5
console.log('===========================ejercicio5===========================');
for (let i = 1; i <= 15; i++) {
  if (i%2 === 0) {
    console.log(`${i} es par`);
  }else{
    console.log(`${i} es impar`);
  }
}
alert('Por favor abrir la consola para ver el resultado del ejercicio 5');

//ejercicio 6
console.log('===========================ejercicio6===========================');
let fNum = Number(prompt('ingresa el 1er numero entre el 1 al 50')); 
let sNum = Number(prompt('ingresa el 2do numero entre el 1 al 50'));
for (let i = 1; i <= 50; i++) {
  if (i === fNum || i === sNum) {
    console.log('¡Loteria!');
  }else{
    console.log(i);
  }
}
alert('Por favor abrir la consola para ver el resultado del ejercicio 6');
//ejercicio 7
console.log('===========================ejercicio7===========================');
for (let i = 1; i <= 100; i++) {
  if (i%15 === 0) {
    console.log('FizzBuzz');
  }else if(i%5 === 0){
    console.log('Buzz');
  }else if(i%3 === 0){
    console.log('Fizz');
  }else{
    console.log(i);
  }
}
alert('Por favor abrir la consola para ver el resultado del ejercicio 7');
//ejercicio 8
let nota = Number(prompt('Agregar una nota entre el 1 al 10'));
if (nota >= 1 && nota <= 10) {
  if (nota < 6) {
    alert("Reprobado");
  } else if (nota >= 6 && nota <= 8) {
    alert("Regular");
  } else if (nota === 9) {
    alert("Bien");
  } else if (nota === 10) {
    alert("Excelente");
  }
}else{
  alert('La nota ingresada no existe en el sistema: Por favor ingresar una nota del 1 al 10')
}
//ejercicio 9
let opcion = prompt('Por favor escribe el topping que desees (oreo, kitkat, brownie)');
const precioBase = 50;
switch (opcion.toLocaleLowerCase()) {
  case 'oreo':
    alert(`El precio de su helado es: ${precioBase + 10} MXN`);
    break;
  case 'kitkat':
    alert(`El precio de su helado es: ${precioBase + 15} MXN`);
    break;
  case 'brownie':
    alert(`El precio de su helado es: ${precioBase + 20} MXN`);
    break;
  default: 
    alert(`no tenemos este topping, lo sentimos. El precio de su helado es: ${precioBase} MXN`);
    break;
}
//ejercicio 10
const precios = {
  course: 4999,
  carrera: 3999,
  master: 2999
}
const becas = {
  facebook: 0.20,
  google: 0.15,
  jesua: 0.50
}
let opcionCurso = prompt('Elige el programa al que deseas inscribirte: (Course, Carrera, Master)');
if (precios[opcionCurso.toLocaleLowerCase()] !== undefined) {
  let beca = prompt('¿Cuentas con alguna de las siguientes becas? (facebook, google, jesua)');
  const descuento = becas[beca] || 0;

  let duracion;
  switch (opcionCurso.toLocaleLowerCase()) {
    case 'course':
      duracion = 2;
      break;
    case 'carrera':
      duracion = 6;
      break;
    case 'master':
      duracion = 12;
      break;
  }
  const costoMensualDsto = precios[opcionCurso] * (1 - descuento);
  const total = costoMensualDsto * duracion;

  alert(`El costo mensual con descuento es: ${costoMensualDsto} MXN. \nEl total del curso es: ${total} MXN.`);
}else {
  alert("Curso no válido. Por favor, elija entre Course, Carrera o Master.");
}
//ejercicio 11
const tipoVehiculo = prompt("Ingrese el tipo de vehículo (coche, moto, autobús):");
const kmsRecorridos = parseFloat(prompt("Ingrese la distancia recorrida en kilómetros:"));
const litrosConsumidos = parseFloat(prompt("Ingrese la cantidad de litros consumidos:"));

let precioKilometro;
switch (tipoVehiculo) {
    case 'coche':
        precioKilometro = 0.20;
        break;
    case 'moto':
        precioKilometro = 0.10;
        break;
    case 'autobús':
        precioKilometro = 0.5;
        break;
    default:
        alert("Tipo de vehículo no válido. Por favor, elija entre coche, moto o autobús.");
        break;
}

let totalPagar = (precioKilometro * kmsRecorridos);

if (litrosConsumidos > 0 && litrosConsumidos <= 100) {
    totalPagar += 5;
} else if (litrosConsumidos > 100) {
    totalPagar += 10;
}

alert(`El total a pagar es: ${totalPagar} MXN`);

/* ================ RETO SEMANAL II ================ */
//ejercicio 1
console.log('===========================RETO SEMANAL II===========================');
console.log('===========================ejercicio1===========================');
const arregloOriginal = [ 5, 1, 8, 6, 3];

const arregloInvertido = [];

const longitud = arregloOriginal.length;

for (let i = longitud - 1; i >= 0; i--) {
    arregloInvertido.push(arregloOriginal[i]);
}
console.log("Arreglo original:", arregloOriginal);
console.log("Arreglo invertido:", arregloInvertido);
alert('Por favor revisar la consola para ver la respuesta ejercicio 1 reto semanal II')

//ejercicio 2
console.log('===========================ejercicio2===========================');
const arreglo2 = [2, 8, 5, 3, 1];
let suma = 0;

for (let i = 0; i < arreglo2.length; i++) {
  suma += arreglo2[i];
}
console.log("La suma es: ", suma);
//ejercicio 3
console.log('===========================ejercicio3===========================');
const arreglo3 = [4, 5, 1, 8, 3];
let mayor = arreglo3[0];

for (let i = 1; i < arreglo3.length; i++) {
  if (arreglo3[i] > mayor) {
    mayor = arreglo3[i];
  }
}
console.log("El número mayor es:", mayor);
//ejercicio 4
console.log('===========================ejercicio4===========================');
const arreglo4 = [3, 4, 5, 12, 6, 1, 13];
const arregloPar = [];

for (let i = 0; i < arreglo4.length; i++) {
    if (arreglo4[i] % 2 === 0) {
        arregloPar.push(arreglo4[i]);
    }
}
console.log("Arreglo con números pares:", arregloPar);
//ejercicio 5
console.log('===========================ejercicio5===========================');
const library = [
  {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true,
  },
  {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true,
  },
  {
      author: 'Suzanne Collins',
      title: 'Mockingjay: The Final Book of The Hunger Games',
      readingStatus: false,
  },
];

for (let i = 0; i < library.length; i++) {
  if (library[i].readingStatus) {
      console.log(`Libro: ${library[i].title}, Autor: ${library[i].author}`);
  }
}