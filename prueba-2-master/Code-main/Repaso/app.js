let v1 = "hola";
let v2 = 3;
let v3 = true;
alert("Mensaje al usuario");
let retornoConfirm;
retornoConfirm = confirm("¿Estas seguro?")
if (retornoConfirm == true) {
    alert("Has pulsado Aceptar")
} else {
    alert("Has pulsado Cancelar");
}
alert("Estoy pensando en un color...");
let colorSolucion = "rojo"
let respuesta = prompt("¿Que color estoy pensando?")
if (respuesta == colorSolucion) {
    alert("Has acertado")
} else {
    alert("No, pulsa F5 para volver a jugar")
}
