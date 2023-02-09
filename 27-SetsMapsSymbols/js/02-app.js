// WeakSet

const weakset = new WeakSet();

const cliente = {
    nombre : 'Fernando',
    saldo: 100
}

const nombre = 'Fernando';

weakset.add(cliente);

// weakset.add(nombre); no es valido

// console.log(weakset.has('nombre'));

console.log(weakset);

console.log(cliente.size);