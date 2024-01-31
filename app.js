let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignaTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === numeroSecreto) {
        asignaTextoElemento("p", `Acertaste el número en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignaTextoElemento("p", "El número secreto es menor.");
        } else {
            asignaTextoElemento("p", "El número secreto es mayor.");
        }
        intentos++;
    }
    limpiarCaja();
    return;
}

function limpiarCaja() {
    document.getElementById("valorUsuario").value = "";
}

function generaNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignaTextoElemento("p", "Ya se sortearon todos los números posibles");
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generaNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignaTextoElemento("h1", "Juego del número secreto");
    asignaTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generaNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Se limpia la caja
    limpiarCaja();
    // Se agregan las condiciones iniciales
    condicionesIniciales();
    //Deshabilitar el btn de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
console.log(numeroSecreto);
