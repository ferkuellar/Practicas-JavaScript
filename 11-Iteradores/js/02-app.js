//for (let i = 0; i <= 10; i++) {
//    if(i === 5){
//        console.log('CINCO');
//        continue;
//    }
//    console.log(`numero: ${i}`);
//}


const carrito = [
    {nombre: "Monitor 27 pulgadas", precio:500},
    {nombre: "Televisor 50 pulgadas", precio:1200},
    {nombre: "Celular", precio:300},
    {nombre: "Tablet", precio:1500, descuento: true},
    {nombre: "Pc Gaming", precio:1300},
]

for(let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} tiene descuento`);
        continue;
    }
    console.log(carrito[i].nombre)
}