function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function() {
    let tipo;
    if(this.saldo > 10000){
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function(){
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo de Cliente: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(retira){
    this.saldo -= retira
}

function Persona(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}


// antes de crear una instancia
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

// Instanciarlo

const juan = new Persona('Juan', 5000, 109201192);
console.log(juan);
console.log(juan.nombreClienteSaldo());


Persona.prototype.mostarTelefono = function(){
    return `El telefono de esta persona es ${this.telefono}`
}

console.log(juan.mostarTelefono());