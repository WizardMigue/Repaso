let color = prompt("¿Que color quieres para el parrafo?");
color=color.toLowerCase();
let elementoParrafo = document.getElementById("parrafo")
console.log(elementoParrafo);
elementoParrafo.innerHTML = "Hola clase";


if (color == "rojo" || color == "verde" || colorm == "ROJO") {
    elementoParrafo.className = color;
}
else {
    alert("Solo puede ser color rojo o verde")
}