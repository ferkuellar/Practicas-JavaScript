const autenticado = true;
const puedePagar = true;

console.log(autenticado && puedePagar ? 'Si esta autenticado' : 'No esta autenticado' );

console.log(autenticado ? puedePagar ? 'Si esta autenticado y puede pagar' : 'si eautenticado, no puede pagar' :'No esta autenticado');