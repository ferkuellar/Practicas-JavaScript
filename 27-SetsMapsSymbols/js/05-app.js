const sym = Symbol('1');
const sym2 = Symbol('1');

// if(sym === sym2){
//     console.log('son iguales')
// } else{
//     console.log('son diferentes')
// }

// console.log(Symbol() === Symbol());

const nombre = Symbol();
const apellido = Symbol();

const persona = {}

// Agregar nombre y apellido con llaves del objeto

persona[nombre] = 'Fernando';
persona[apellido] = 'Cuellar';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);
// console.log(persona[nombre]);

// las propiedades que utilizan un Symbol no son iterables
for(let i in persona){
    console.log(i);
}

// definir una descripcion de symbol
const nombreCliente = Symbol('nombre del cliente');
const cliente = {};

cliente[nombreCliente] = 'Pedro';

console.log(cliente);
console.log(cliente[nombreCliente]);
console.log(nombreCliente);