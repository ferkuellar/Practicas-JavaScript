// operador mayor que y menor que

const dinero = 500;
const totalPagar = 500;
const tarjeta = true;
const cheuqe = true;


if(dinero >= totalPagar) {
    console.log('Si podemos pagar');
} else if (cheuqe) { 
    console.log('si tengo un cheque');
} else if (tarjeta) {
    console.log('Si tengo la trjeta');
} else{
    console.log('Fondos Insuficientes');
} 