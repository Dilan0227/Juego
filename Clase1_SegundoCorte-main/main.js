var ATK = 8;
var vidaenemigo = 100;
var vidajugador = 100;
var atkenemigo = 10;

var juegoTerminado = false;

function atacar(){
    if(juegoTerminado) return;

    ATK_PLAYER();
    ATK_ENEMIGO();

    verificarEstado();
    actualizarVista();
}

function ATK_PLAYER(){
    var bonus = Math.random()*20;
    var daño = Math.floor(ATK + bonus);

    vidaenemigo -= daño;

    document.getElementById("imgJugador").src = "ataque jugador.jpg";

    mostrarMensaje("💥 El jugador ataca con un valor de " + daño);
}

function ATK_ENEMIGO(){
    var prob = Math.random();

    if(prob >= 0.2){
        var daño = atkenemigo;
        vidajugador -= daño;

        document.getElementById("imgEnemigo").src = "ataque enemigo.png";

        mostrarMensaje("⚔️ El enemigo ataca con un valor de " + daño);
    }
}

function Descansar_Player(){
    if(juegoTerminado) return;

    var bonusvida = Math.floor(Math.random()*10);
    vidajugador += bonusvida;

    document.getElementById("imgJugador").src = "descanso.png";

    mostrarMensaje("🛌 El jugador recupera " + bonusvida + " de vida");

    var prob = Math.random();
    if(prob >= 0.7){
        vidajugador -= atkenemigo;
        document.getElementById("imgEnemigo").src = "ataque enemigo.png";

        mostrarMensaje("⚠️ El enemigo aprovechó y atacó!");
    }

    verificarEstado();
    actualizarVista();
}

function mostrarMensaje(texto){
    document.getElementById("mensajes").innerText = texto;
}

function verificarEstado(){

    if(vidaenemigo <= 0){
        vidaenemigo = 0;
        juegoTerminado = true;

        document.getElementById("imgEnemigo").src = "muerto.jpg";
        mostrarMensaje("☠️ El enemigo ha muerto");
    }

    if(vidajugador <= 0){
        vidajugador = 0;
        juegoTerminado = true;

        document.getElementById("imgJugador").src = "muerto.jpg";
        mostrarMensaje("☠️ El jugador ha muerto");
    }
}

function actualizarVista(){
    document.getElementById("EstadoPlayer").innerText = "Vida: " + vidajugador;
    document.getElementById("EstadoEnemigo").innerText = "Vida: " + vidaenemigo;
}