// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let numeroMaximo = 5;

function agregarAmigo() {

    let amigo = document.getElementById("amigo").value;

    console.log(amigos);

    if(!amigo){
        return asignarTextoElemento("h2", "no puedes ingresar un valor vacio");
    }
    if (amigos.includes(amigo)) {
        return asignarTextoElemento("h2", "ese amigo ya esta en la lista del sorteo");
    }
    if (amigos.length >= numeroMaximo) {
        return asignarTextoElemento("h2", "No puedes agregar más amigos al sorteo.");
    }
    else {
        amigos.push(amigo);
        asignarTextoElemento("h2", `¡Amigo agregado: ${amigo}!`);
        return amigos;
    }
}

function asignarTextoElemento(elemento, texto) {

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

function generarNumeroAleatorio() {
    return Math.floor(Math.random() * numeroMaximo) + 1;
}

