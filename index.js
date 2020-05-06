function random(minimo, maximo) {
    var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
}

var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opcionUsuario;
var opcionMaquina = random(0, 4);

var opcionUsuario = prompt(
    "Elije una opción\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4",
    0
);

alert("La computadora eligió: " + opciones[opcionMaquina]);

if (opcionUsuario == piedra) {
    alert("Elegiste Piedra!");
    if (opcionMaquina == piedra) {
        alert("Empate!");
    } else if (opcionMaquina == papel) {
        alert("Perdiste!");
    } else if (opcionMaquina == tijera) {
        alert("Ganaste!");
    } else if (opcionMaquina == lagarto) {
        alert("Ganaste");
    } else if (opcionMaquina == spock) alert("Perdiste");
} else if (opcionUsuario == papel) {
    alert("Elegiste Papel!");
    if (opcionMaquina == piedra) {
        alert("Ganaste!");
    } else if (opcionMaquina == papel) {
        alert("Empate!");
    } else if (opcionMaquina == tijera) {
        alert("Perdiste!");
    } else if (opcionMaquina == lagarto) {
        alert("Perdiste!");
    } else if (opcionMaquina == spock) alert("Ganaste!");
} else if (opcionUsuario == tijera) {
    alert("Elegiste Tijera!");
    if (opcionMaquina == piedra) {
        alert("Perdiste!");
    } else if (opcionMaquina == papel) {
        alert("Ganaste!");
    } else if (opcionMaquina == tijera) {
        alert("Empate!");
    } else if (opcionMaquina == lagarto) {
        alert("Ganaste!");
    } else if (opcionMaquina == spock) alert("Perdiste!");
} else if (opcionUsuario == lagarto) {
    alert("Elegiste Lagarto!");
    if (opcionMaquina == piedra) {
        alert("Perdiste!");
    } else if (opcionMaquina == papel) {
        alert("Ganaste!");
    } else if (opcionMaquina == tijera) {
        alert("Perdiste!");
    } else if (opcionMaquina == lagarto) {
        alert("Empate");
    } else if (opcionMaquina == spock) {
        alert("Ganaste");
    }
} else if (opcionUsuario == spock) {
    alert("Elegiste Spock!");
    if (opcionMaquina == piedra) {
        alert("Ganaste!");
    } else if (opcionMaquina == papel) {
        alert("Perdiste!");
    } else if (opcionMaquina == tijera) {
        alert("Ganaste!");
    } else if (opcionMaquina == lagarto) {
        alert("Perdiste!");
    } else if (opcionMaquina == spock) {
        alert("Empate!");
    }
} else {
    alert("Debes elegir una opción: 0, 1, 2, 3 o 4!");
}