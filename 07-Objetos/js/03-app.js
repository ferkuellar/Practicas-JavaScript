const producto = {
    nombre : "Monitor 20 Pulgadas",
    precio : 300,
    disponible : true,    
}

//Agregar nuevas propiedades al obejto
producto.imagen = "imagen.jpg";

//eliminar propiedades del objeto...

delete producto.disponible;

console.log(producto);