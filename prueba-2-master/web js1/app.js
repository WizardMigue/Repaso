// alert("Hola Mundo");

// // Tipos de una línea
// // Tipos de datos
// // Tipo cadena de texto o string
// "Esto es una cadena de texto"
// 'Esto tambíen es una cadena de texto'
// "I'm the teacher"
// 'I\'m de teacher'

// // alert("Esto es una cadena de texto");
// // alert('Esto tambíen es una cadena de texto');
// // alert("I'm the teacher");
// // alert('I\'m de teacher');

// // Tipo número entero
// // Se pueden usar operafortes aritméticos
// // alert("2"+2);
// // alert(6-5);
// // alert(3*2);
// // alert(2/8);


// // Tipo número decimal
// // Se pueden usar operafortes aritméticos
// // alert(2.5+2.9);
// // alert(6.9-5.3);
// // alert(3.5*2.5);
// // alert(2.1/8.7);

// // Tipo booleano
// // True False
// // Operaciones lógicas &&  ||
// alert(true && true);
// alert(false || true);

let mensaje = "Hola Mundo";
let nombre = "Miguel";
alert("hola " + nombre);
alert(mensaje);
console.log(mensaje)
let numero = 3;
numero = 3 + 2;
numero++;
alert(numero);
numero--;
alert(numero);


let va1 = 5;
let va2 = 3;
let resultado = va1 * va2;
alert(resultado);

alert("Mira el h1")
let elemento = document.getElementById("encabezado");
elemento.innerHTML = "Hola clase";
let resuelto;

resuelto = confirm("¿Quieres que ter salude?");
console.log(resuelto);
if (resuelto == true) {
    alert("Hola");
}
else {
    alert("Hola mundo")
}
alert("Fin del programa");

let incognita = "3"; // este es el número que hayq eu adivinar
let respuesta; // aquí guardaremos lo que introduzca el usuario
respuesta = prompt("Escribe un número del 1 al 10");
if (respuesta == null) {
    alert("Fin del Juego, le has dado a 'Cancelar' ")
}
else if (respuesta == incognita) {
    alert("Enhorabuena, has ganado")
}
else if (respuesta == "1") {
    alert("Uy!. Dale a F5 y prueba otra vez")
}
else if (respuesta == "2") {
    alert("Uy!. Dale a F5 y prueba otra vez")
}
else if (respuesta == "4"|| respuesta=="2") {
    alert("Uy!. Dale a F5 y prueba otra vez")
}
else if (respuesta == "5") {
    alert("Uy!. Dale a F5 y prueba otra vez")
}
else if (respuesta == "6") {
    alert("Uy!. Dale a F5 y prueba otra vez")
}
else if (respuesta == "7") {
    alert("Uy!. Dale a F5 y prueba otra vez")
}
else {
    alert("Lo siento, no ha podido ser. Dale a F5 para jugar otra vez")
}

















