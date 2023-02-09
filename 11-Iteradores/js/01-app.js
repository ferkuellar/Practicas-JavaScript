//for (let i = 0; i <= 20; i++) {
//    console.log(`numero: ${i}`);
//}

//for(let i =0; i<= 20; i++){
//    if(i % 2 === 0) {
//        console.log(`el numero ${i} es par`);
//    } else {
//        console.log(`el numero ${i} en impar`);
//    }
//}

const carrito = [
    {nombre: "Monitor 27 pulgadas", precio:500},
    {nombre: "Televisor 50 pulgadas", precio:1200},
    {nombre: "Celular", precio:300},
    {nombre: "Tablet", precio:1500},
    {nombre: "Pc Gaming", precio:1300},
]

console.log(carrito.length);

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}