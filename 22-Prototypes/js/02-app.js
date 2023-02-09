function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const fernando = new Cliente('Fernando', 500);

function formatearCliente(cliente) {
    const{nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
}

function formatearEmpresa(empresa) {
    const{nombre, saldo, categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}`;
}

console.log(formatearCliente(fernando));

function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCF = new Empresa('Codigo con Fernando', 4000, 'Curso en linea');
console.log(formatearEmpresa(CCF));