// Listas de imágenes
const listaColas = [
    "./img/cola1.jpg",
    "./img/cola2.jpg",
    "./img/cola3.jpg"
];
const listaCabezas = [
    "./img/cabeza1.jpg",
    "./img/cabeza2.jpg",
    "./img/cabeza3.jpg"
];

// Elementos del HTML
const cola = document.getElementById("cola");
const cabeza = document.getElementById("cabeza");
const boton = document.getElementById("boton");

// Devuelve un elemento al azar de una lista
function elegirAlAzar(lista) {
  const posicion = Math.floor(Math.random() * lista.length);
  return lista[posicion];
}

// Cambia la imagen de cada grupo
// Ejecutando elegitAlAzar(lista) con cada lista como argumento
function mezclar() {
  cola.src = elegirAlAzar(listaColas);
  cabeza.src = elegirAlAzar(listaCabezas);
}

// Al hacer clic en el botón ejecuta mezclar()
boton.addEventListener("click", mezclar);

// Mostrar una bestia al cargar la página
mezclar();
