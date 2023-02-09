const carrito = [
    {nombre: "Monitor 27 pulgadas", precio:500},
    {nombre: "Televisor 50 pulgadas", precio:1200},
    {nombre: "Celular", precio:300},
    {nombre: "Tablet", precio:1500},
    {nombre: "Pc Gaming", precio:1300},
]

const nuevoArreglo = carrito.forEach( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
} )


// la diferencia entre forEach y map es que map crea un nuevo arreglo

const nuevoArreglo2 = carrito.map( function(producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
} )

console.log(nuevoArreglo);
console.log(nuevoArreglo2);
