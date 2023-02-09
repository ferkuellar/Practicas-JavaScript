// variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
    //cuando agregas un curso presionando "agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //elimina cursos del carrito
    carrito.addEventListener('click', eliminaCurso);

    //Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; // reseteamos el arrglo
        
        limpiarHTML(); // eliminamos tod el html
    })
}

//funciones

function agregarCurso(e){
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }    
}

// elimina un curso del carrto 
function eliminaCurso(e){
    console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        carritoHTML(); //iterar sobre el carrito y mostrar su html
        
    }
}

//lee el contenido del html al que le dimos click  y extrae la informacion del curso
function leerDatosCurso(curso){
    //console.log(curso);

    //crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if (existe){
        // actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if( curso.id === infoCurso.id ) {
                curso.cantidad++;
                 return curso;  //retorna el objeto actualizado
            } else{
                return curso; // retorna los objetos 
            }
        });
        articulosCarrito = [...cursos];
    } else {
        // agrega elementos al arreglo del carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

        console.log(articulosCarrito);

    carritoHTML();
}

//muestra el carrito de compras en el html

function carritoHTML(){

    // limpiar el HTML
    limpiarHTML();

    //recorre el carrito y genera un html
    articulosCarrito.forEach(curso => {
          const row = document.createElement('tr');
          row.innerHTML = `
               <td>  
                    <img src="${curso.imagen}" width=100>
               </td>
               <td>${curso.titulo}</td>
               <td>${curso.precio}</td>
               <td>${curso.cantidad} </td>
               <td>
                    <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
               </td>
          `;
          contenedorCarrito.appendChild(row);
     });
}

//eliminar los cursos del tbody

function limpiarHTML() {
        //forma lenta
        //contenedorCarrito.innerHTML = '';
    while(contenedorCarrito.firstChild) {
            contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }

}
