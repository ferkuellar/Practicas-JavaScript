// forma de generar un object estatico "object literal"

const cliente = {
    nombre: 'fernando',
    saldo: 500
}

console.log(cliente);
console.log(typeof cliente);


// "Clases" crear objeto reutilizable "object constructor"

function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const fernando = new Cliente('Fernando', 500);

console.log(fernando);

