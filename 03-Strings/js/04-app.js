const producto = '               Monitor 20 pulgadas                ';

console.log(producto);
console.log(producto.length);

// Eliminar el inicio .....
console.log( producto.trimStart() );
console.log( producto.trimEnd() );

console.log( producto.trimStart().trimEnd() );