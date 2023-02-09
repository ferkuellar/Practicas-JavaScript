//crear nuveo enlace
const enlace = document.createElement('a');

//agergando texto
enlace.textContent = 'Nuevo Enlace';

//añadiendo href
enlace.href = '/nuevo-enlace';

console.log(enlace);

enlace.target = '_blank';

enlace.setAttribute('data-enlace', 'nuevo enlace');

enlace.classList.add('alguna-clase');

//seleccionar navegacion
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);

// navegacion.appendChild(enlace);
navegacion.insertBefore(enlace, navegacion.children[1]);

// Crear un card de forma dimanica
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('P');
parrafo3.textContent = ' $ 800.00 por persona';
parrafo3.classList.add('precio');

// crear div con la clase de info

const info = document.createElement('div');
info.classList.add('info');

info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear la imagen
const imagen =document.createElement('img');
imagen.src = 'img/hacer2.jpg';

//crear el card
const card = document.createElement('div');
card.classList.add('card');

//asignar la imagen 
card.appendChild(imagen);

//asignar info

card.appendChild(info);

// insertar en el HTML

const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);