// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


// Event Listeners
eventListeners();

function eventListeners() {
    // CUANDO EL USUARIO AGREGA UN NUEVO TWEET
    formulario.addEventListener('submit', agregarTweet);

    // CUANDO EL DOCUMENTO ESTA LISTO
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || []; 

        console.log(tweets);

        crearHTML();
    });
}

// Funciones

function agregarTweet(e) {
    e.preventDefault();

    // TEXT AREA DONDE EL USUARIO ESCRIBE
    const tweet = document.querySelector('#tweet').value;

    // VALIDACION
    if(tweet === ''){
        mostrarError('Un mensaje no puede ir vacio');

        return; //evita que se ejecuten mas lineas de codigo
    }

    const tweetObj ={
        id: Date.now(),
        tweet
    }

    // AÑADIR ARREGLO DE TWEETS
    tweets = [...tweets, tweetObj];

    // UNA VEZ AGREGADO VAMOS A CREAR EL HTML
    crearHTML();

    // REINICIAR EL FORMULARIO
    formulario.reset();
}

// MOSTRAR MENSAJE DE ERROR
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    // INSERTAR EN EL CONTENEDOR
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    setTimeout(() =>{
        mensajeError.remove();
    }, 3000);
}

// MUESTRA UN LISTADO DE LOS TWEETS

function crearHTML(){

    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach(tweet => {

            // AGREGAR UN BOTON DE ELIMINAR
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // AÑADIR LA FUNCION DE ELIMINAR
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            // CREAR EL HTML
            const li = document.createElement('li');

            // AÑADIR EL TEXTO
            li.innerText = tweet.tweet;
            
            // ASIGNAR EL BOTON ELIMINAR
            li.appendChild(btnEliminar);

            // INSERTAR EN EL HTML
            listaTweets.appendChild(li);  
        });
    }

    sincronizarStorege();
}

// AGREGAR LOS TWEETS ACTUALES A LOCAL STORAGE
function sincronizarStorege(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// ELIMINA UN TWEET
function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    
    crearHTML();
}

// LIMPIAR HTML

function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}