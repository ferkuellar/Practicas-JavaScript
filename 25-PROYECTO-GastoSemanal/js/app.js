// Variables y Selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');


// Eventos
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);

    formulario.addEventListener('submit', agregarGasto);
}


// Clasess
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0)
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter (gasto => gasto.id !== id);
        this.calcularRestante();
    }
}

class UI {
    insertarPresupuesto(cantidad){
        const {presupuesto, restante} = cantidad;

        // Agregar al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){
        // crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // Mensaje de error
        divMensaje.textContent = mensaje;

        // insertar el html
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        // Quitar del HTML
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    agregarGastoListado(gastos){

        this.limpiarHTML(); //Elimina el HTML previo

        // Iterar sobre los gastos
        gastos.forEach(gasto => {
            const {nombre, cantidad, id } = gasto;

            // crear un LI
            const nuevoGasto =document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id;
            // console.log(nuevoGasto);

            // Agregar el HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <sapn class="badge badge-primary badge-pill">$ ${cantidad}</sapn>`;

            // Boton para borra el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'btn-gasto');
            btnBorrar.innerHTML = 'Borrar &times;'
            
            nuevoGasto.appendChild(btnBorrar);

            // Agregar al HTML
            gastoListado.appendChild(nuevoGasto);
        });
    }

    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        };
    }

    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj) {
        const { presupuesto, restante } = presupuestoObj;
        const restanteDiv = document.querySelector('.restante');

        // comnpronar el 25%

        if((presupuesto / 4) > restante){

            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');

        } else if((presupuesto / 2) > restante){

            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } else {

            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        // si el restante es menor que cero

        if(restante <= 0){
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type = "submit"]').disabled = true;
        }
    }
}

// Instanciar
const ui = new UI();
let presupuesto;

// Funciones

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cual es tu presuspuesto?');

    // console.log(Number(presupuestoUsuario || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0));

    if(presupuestoUsuario === ''){
        window.location.reload();
    }

    // Presupuesto valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    // console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}

// Añade Gastos
function agregarGasto(e){
    e.preventDefault();

    // Leer los datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);
    

    // validar
    if(nombre === '' || cantidad === ''){
        ui.imprimirAlerta('Ambos campos son obligatorios', 'error');

        return;
    } else if(cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida.', 'error');
        return;
    }

    // Generar el objeto con el gasto
    const gasto = {nombre, cantidad, id: Date.now()}

    // Añade nuevo gasto
    presupuesto.nuevoGasto(gasto);

    // Mensaje de todo bien
    ui.imprimirAlerta('Gasto agregado correctamente');

    // imprimir los gastos
    const { gastos, restante } = presupuesto;
        ui.agregarGastoListado(gastos);
        ui.actualizarRestante(restante);
        ui.comprobarPresupuesto(presupuesto);

    // Reinicia el formulario
    formulario.reset();
}

function eliminarGasto(id) {

    // elimina del objeto
    presupuesto.eliminarGasto(id);

    // elimina los gastos
    const {gastos, restante} = presupuesto;
        ui.mostrarGastos(gastos);
        ui.actualizarRestante(restante);
        ui.comprobarPresupuesto(presupuesto);
}