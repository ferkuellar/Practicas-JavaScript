// class declaration
class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostarInformacion(){
        return `Cliente ${this. nombre}, tu saldo es de ${this.saldo}` ;
    }
    static bienvenida() {
        return `Bienvenida al cajero`
    }

}

const juan = new Cliente('Juan', 400);
console.log(juan.mostarInformacion());
console.log(juan);

console.log(Cliente.bienvenida());

// class expresion
const Cliente2 = class {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostarInformacion(){
        return `Cliente ${this. nombre}, tu saldo es de ${this.saldo}` ;
    }
}

const juan2 = new Cliente2('Juan', 400);
console.log(juan2.mostarInformacion());
console.log(juan2);