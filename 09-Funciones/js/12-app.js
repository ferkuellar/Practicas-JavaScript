const carrito = [
    {nombre: "Monitor 27 pulgadas", precio:500},
    {nombre: "Televisor 50 pulgadas", precio:1200},
    {nombre: "Celular", precio:300},
    {nombre: "Tablet", precio:1500},
    {nombre: "Pc Gaming", precio:1300},
]

const nuevoArreglo = carrito.map ( producto => `${producto.nombre} - Precio: ${producto.precio}`);
// la diferencia entre forEach y map es que map crea un nuevo arreglo
carrito.forEach( producto => console.log (`${producto.nombre} - Precio: ${producto.precio}`));

console.log(nuevoArreglo);
