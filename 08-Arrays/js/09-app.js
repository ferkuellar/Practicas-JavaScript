const carrito = [
    {nombre: "Monitor 27 pulgadas", precio:500},
    {nombre: "Televisor 50 pulgadas", precio:1200},
    {nombre: "Celular", precio:300},
    {nombre: "Tablet", precio:1500},
    {nombre: "Pc Gaming", precio:1300},
]

for(let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})