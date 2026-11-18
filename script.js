
const palabras = [
    "pavo",
    "girasol",
    "bellota",
    "canela",
    "maíz",
    "manzana",
    "hojas",
    "calabaza",
    "sombrero de peregrino",
    "árbol",
    "vela",
    "tarta de manzana"
];
let palabrasDisponibles = [...palabras];
const imagenes = {
    "pavo": "pavo.png",
    "girasol": "girasol.png",
    "bellota": "bellota.png",
    "canela": "canela.png",
    "maíz": "maiz.png",
    "manzana": "manzana.png",
    "hojas": "hojas.png",
    "calabaza": "calabaza.png",
    "sombrero de peregrino": "sombrero_de_peregrino.png",
    "árbol": "arbol.png",
    "vela": "vela.png",
    "tarta de manzana": "tarta_de_manzana.png"
};

const boton = document.getElementById("siguiente");
const texto = document.getElementById("palabra");
const imagen = document.getElementById("imagen");
const subtitulo = document.getElementById("subtitulo");
const botonReiniciar = document.getElementById("reiniciar");

boton.addEventListener("click", function() {

    if (palabrasDisponibles.length === 0) {
    alert("¡Fin del juego!");
    return;
}

    const numeroAleatorio = Math.floor(
        Math.random() * palabrasDisponibles.length
    );

    const palabraSeleccionada = palabrasDisponibles[numeroAleatorio];

    texto.textContent = palabraSeleccionada;
    imagen.src = "images/" + imagenes[palabraSeleccionada];

    imagen.hidden = false;
subtitulo.hidden = true;
    palabrasDisponibles.splice(numeroAleatorio, 1);

});

botonReiniciar.addEventListener("click", function() {

    palabrasDisponibles = [...palabras];

    texto.textContent = "Presiona el botón para comenzar.";
imagen.hidden = true;
subtitulo.hidden = false;
});
