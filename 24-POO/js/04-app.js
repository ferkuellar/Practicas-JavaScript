// class declaration
class Cliente {

    #nombre; // hacerlo privado

    // constructor(nombre, saldo){
    //     this.#nombre = nombre;
    //     this.saldo = saldo;
    // }
    // mostarInformacion(){
    //     return `Cliente ${this.#nombre}, tu saldo es de ${this.saldo}`;
    // }
    // static bienvenida() {
    //     return `Bienvenida al cajero`;
    // }

    setNombre(nombre){
        this.#nombre = nombre;        
    }

    getNombre(){
        return this.#nombre;
    }
}

const juan = new Cliente();
juan.setNombre('juan');
console.log(juan.getNombre());

// const juan = new Cliente('juan', 200);
// console.log(juan.mostarInformacion());
// console.log(juan.#nombre);