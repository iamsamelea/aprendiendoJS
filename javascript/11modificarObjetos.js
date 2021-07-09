//MODIFICAR OBJETOS

const producto = {
    nombreProducto: "Auriculares Gaming Logitech",
    precio: 60,
    disponible: true
}



//Agregar propiedades al objeto
producto.imagen = "imagenAuriculares.jpg";


//Eliminar propiedades del objeto
delete producto.disponible; //palabra reservada delete

console.log(producto);


console.log(`El precio de los ${producto.nombreProducto} és de ${producto.precio} €, pero ahora mismo no están disponibles.`);