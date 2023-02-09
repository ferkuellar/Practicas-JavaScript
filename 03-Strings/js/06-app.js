const producto = 'Monitor 20 pulgadas ';

// .repeat te va a permitir repetir una cadena de texto

const texto = ' En promocion'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);


// Split te permite dividir un string

const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

const hobbies = 'leer, caminar, escuchar musica, escribir, aprender a programar';

console.log(hobbies.split(", "));

const tweet = "Aprendiendo Javascript Moderno #Fernando";
console.log(tweet.split("#"));