localStorage.setItem('nombre', 'Fernando');

const producto = {
    nombre: "monitor 24 pulgadas",
    prtecio: 300
};

const productoString =JSON.stringify(producto);
// console.log(typeof productoString);
localStorage.setItem('producto', productoString);

const meses = ['enero', 'febrero', 'marzo'];
// const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', JSON.stringify(meses));