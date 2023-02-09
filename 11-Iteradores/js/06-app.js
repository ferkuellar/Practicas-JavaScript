//for each

const pendientes = ['Tarea', 'Comer', 'Proyectos', 'Estudiar'];

pendientes.forEach((pendientes, index) => {
    console.log(`${index} : ${pendientes}`);
})

const carrito = [
    {nombre: "Monitor 27 pulgadas", precio:500},
    {nombre: "Televisor 50 pulgadas", precio:1200},
    {nombre: "Celular", precio:300},
    {nombre: "Tablet", precio:1500},
    {nombre: "Pc Gaming", precio:1300},
]

const nuevoArreglo = carrito.forEach((producto) => console.log(producto.nombre));

const nuevoArreglo2 = carrito.map((producto) => console.log(producto.nombre));

console.log(nuevoArreglo);
console.log(nuevoArreglo2);