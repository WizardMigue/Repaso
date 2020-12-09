let bola = document.getElementById("bola");
let vel = 5;
let ultimapulsacion = "";

function moverBola(evento) {
    let posX = bola.x;
    let posY = bola.y;
    let vel = 5;
    if (ultimapulsacion == evento.key) {
        vel++;
    } else {
        vel = 5;
    }
    ultimapulsacion == evento.key;
    if (evento.key == "ArrowUp") {
        bola.style.top = posY - vel + "px";
    } else if (evento.key == "ArrowDown") {
        bola.style.top = posY + vel + "px";
    } else if (evento.key == "ArrowLeft") {
        bola.style.left = posX - vel + "px";
    } else if (evento.key == "ArrowRight") {
        bola.style.left = posX + vel + "px";
    }
}