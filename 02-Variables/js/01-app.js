//inicializar una variable con un valor
var producto = "Monitor de 24 pulgadas";
console.log(producto);

// las variables se pueden reasignar 
producto = "Monitor de 19 pulgadas";
console.log(producto);

// JavaScript es una lenguaje de tipo dinamico, no se especifica tipo de dato
producto = 20;
console.log(producto);

// Se pueden inicializar sin valor y asignarlo despues
var disponible;
disponible = true;

disponible = false;

//inicializar multiples variables

var categoria = 'Computadoras';
var marca = 'Marcas Famosas';
var calificacion = 5;

/*
var categoria = 'Computadoras',
    marca = 'Marcas Famosas',
    calificacion = 5;
    */

// Las variables no pueden incializar con numeros

// var 99dias;     // no se puede
// var dias99;     // si se puede

// var 01_;        // no se puede
// var _01;        // si se puede
// var _usuarios;  // no se puede
// var __usuarios  // si se puede

// var nombreProducto // Camel case
// var NombreProducto // Pascal case
// var nombre_producto_categoria_precio  //Snake