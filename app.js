// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let numeroMaximo = 5;

function agregarAmigo() {

    let amigo = document.getElementById("amigo").value;

    console.log(amigos);

    if(!amigo){
        alert("error no se puede mandar espacios vacios");
        return asignarTextoElemento("h2", "no puedes ingresar un valor vacio");
    }
    if (amigos.includes(amigo)) {
        alert("error ese nombre ya esta en la lista");
        return asignarTextoElemento("h2", "ese amigo ya esta en la lista del sorteo");
    }
    if (amigos.length >= numeroMaximo) {
        alert("llegaste al limite de amigos a agregar")
        return asignarTextoElemento("h2", "No puedes agregar más amigos al sorteo.");
    }
    else {
        amigos.push(amigo);
        alert("se agrego a tu amigo al sorteo");
        asignarTextoElemento("h2", `¡Amigo agregado: ${amigo}!`);
        limpiarCampos();
        mostrarLista();
        return amigos;
    }
}

function mostrarLista(){

    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    if (amigos.length > 0) {
        amigos.forEach((amigo, index) => {
            let li = document.createElement("li");
            li.textContent = `${index + 1}. ${amigo}`;
            lista.appendChild(li);
        });
    } else {
        lista.innerHTML = "<li>No hay amigos en la lista.</li>";
    }
}

function sortearAmigo(){
    
    if(amigos.length > 0){
        
        let indiceAleatorio = generarNumeroAleatorio(amigos.length);

        let amigoSorteado = amigos[indiceAleatorio];

        asignarTextoElemento("h2", `¡El amigo sorteado es: ${amigoSorteado}!`);
    }else {
        asignarTextoElemento("h2", "No hay amigos para sortear.");
    }
}

function asignarTextoElemento(elemento, texto) {

    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

function generarNumeroAleatorio(limite) {
    return Math.floor(Math.random() * limite) + 1;
}

function limpiarCampos(){
    document.getElementById("amigo").value = ""; 
}
