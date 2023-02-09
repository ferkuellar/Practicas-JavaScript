
const pendientes = ['Tarea', 'Comer', 'Proyectos', 'Estudiar'];


const carrito = [
    {nombre: "Monitor 27 pulgadas", precio:500},
    {nombre: "Televisor 50 pulgadas", precio:1200},
    {nombre: "Celular", precio:300},
    {nombre: "Tablet", precio:1500},
    {nombre: "Pc Gaming", precio:1300},
]

for(let pendiente of pendientes) {
    console.log(pendiente);
}

for(let producto of carrito){
    console.log(producto.nombre)
}