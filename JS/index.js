let crupier = [];
let jugador = [];
let valorCrupier = 0;
let valorJugador = 0;
let HTMLCrupier = document.getElementById("HTMLCrupier");
let HTMLJugador = document.getElementById("HTMLJugador");
let HTMLLose = document.getElementById("HTMLLose");

// GENERA CARTAS DEL 1 AL 10
function generarCartas(){
    let carta = Math.floor(Math.random() * 10) + 1;
    return carta;
  }

// CUENTA LAS CARTAS DEL JUGADOR - DEVUELVE NUMERO
function contarCartasJugador(){
    for(let i = 0; i < jugador.length; i++){
        valorJugador = valorJugador + jugador[i];
}
 return valorJugador;
}
// CUENTA LAS CARTAS DEL CRUPIER - DEVUELVE NUMERO
function contarCartasCrupier(){
    for(let i = 0; i < crupier.length; i++){
        valorCrupier += crupier[i];
}
 return valorCrupier;
}
// REPARTE CARTAS AL JUGADOR Y AL CRUPIER
function repartirCartas(){
    for(i = 0; i < 2; i++){
        jugador.push(generarCartas());
    }
    crupier.push(generarCartas());
    contarCartasJugador();
    contarCartasCrupier();
    HTMLJugador.innerHTML = "Jugador = " + valorJugador;
    HTMLCrupier.innerHTML = "Crupier =" + valorCrupier + " " + "?";

}

// PIDE CARTAS PARA EL JUGADOR
function pedirCarta(){
    if(valorJugador === 0){
        HTMLLose.innerHTML = "Hay que repartir primero";
    } else {
    jugador.push(generarCartas());
    if(valorJugador === valorJugador){
        valorJugador = 0;
    }
    contarCartasJugador();
    HTMLJugador.innerHTML = "Jugador = " + valorJugador;
    estadoDelJuegoDelJugador();
}
}

// CHEQUEA EL ESTADO DEL CRUPIER
function estadoCrupier(){
    crupier.push(generarCartas());
    if(valorCrupier === valorCrupier){
        valorCrupier = 0;
    }
    contarCartasCrupier();    
     HTMLCrupier.innerHTML = "Crupier = " + valorCrupier;
}


// SE PLANTA PARA DECIDIR EL FINAL
function plantarse(){
    if(valorJugador === 0){
        HTMLLose.innerHTML = "Hay que repartir primero";
    } else {
    for(let i = 0; valorCrupier <= 17; i++){
        estadoCrupier();
    }
    estadoDelJuegoTotal();
    }
}
// REVISA EL ESTADO DEL JUEGO DEL JUGADOR
function estadoDelJuegoDelJugador(){
    if(valorJugador > 21){
        HTMLLose.innerHTML = "Te pasaste";
    }
}

// REVISA EL ESTADO DEL JUEGO TOTAL
function estadoDelJuegoTotal(){
    if(valorJugador > valorCrupier || valorCrupier > 21){
        HTMLLose.innerHTML = "Felicidades Ganaste!";
    } else if (valorJugador < valorCrupier){
        HTMLLose.innerHTML = "Lo siento perdiste";
    } else if (valorJugador === valorCrupier){
        HTMLLose.innerHTML = "Empate, no gana nadie";
    }
}

// GENERA UN NUEVO JUEGO

function nuevaPartida(){
    crupier = [];
    jugador = [];
    valorCrupier = 0;
    valorJugador = 0;
    HTMLCrupier.innerHTML = "Crupier ="
    HTMLJugador.innerHTML = "Jugador ="
    HTMLLose.innerHTML = ""
}