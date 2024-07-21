let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//comparar los numeros
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1 ? 'vez.' : 'veces.')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', ' El numero es menor');
    } else {
        asignarTextoElemento('p', ' El numero es mayor');
    }
        intentos++;
    }
    limpiarCaja();
    
    return;
}  
//limpiar el input
function limpiarCaja() {
  let valorCaja = document.getElementById('valorUsuario');
  valorCaja.value = "";
}

//funcion que contiene el texto y obtiene el numero secreto
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Bienvenidos al juego');
    asignarTextoElemento('p', 'Escribe un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

//funcion que genera un numero aleatorio
function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            console.log(listaNumerosSorteados);
            return numeroGenerado;
        }
    }
}

//funcion que se activa con el boton nuevo juego
function reiniciarJuego(){
    //cuando reiniciamos el juego se limpia la caja
    limpiarCaja();
    //se reinician los mensajes iniciales
    condicionesIniciales();
    //se reinician los numeros de intento
    
    //reiniciar el numero secreto
    
    //volver el estado del boton a disabled
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}


condicionesIniciales();