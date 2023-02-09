// class declaration
class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostarInformacion(){
        return `Cliente ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
    static bienvenida() {
        return `Bienvenida al cajero`;
    }

}

// herencia
class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo); // herdar de un constructor padre
        this.telefono = telefono;
        this.categoria = categoria;
    }    
    static bienvenida() {  //reescribir un metodo
        return `Bienvenida al cajero de empresas`;
    }
}

const juan = new Cliente('Juan', 400);
const empresa = new Empresa('codigo con juan', 500, 2209011, 'aprednizaje en linea');
console.log(empresa)
console.log(juan.mostarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());