//OBJECT METHODS
const producto = {
    nombreProducto: "Monitor Full HD 20\"",
    precio: 150,
    disponible: true
}

const producto2 = {
    nombreProducto: "Monitor Full HD 24\"",
    precio: 200,
    disponible: false
}

//Freeze (no permite ni agregar propiedades, eliminar ni modificar los objectos)
Object.freeze(producto);

producto.disponible = false; //Esta modificación del objeto no funciona porque está freeze.
console.log(producto);
console.log(Object.isFrozen(producto));

//Seal (no permite agregar ni eliminar propiedades, pero si modificar las ya existentes)
Object.seal(producto2);

delete producto2.nombreProducto; //Esta línea no funciona porque el objeto está sealed.
producto2.precio = 350;
console.log(Object.isSealed(producto2));
console.log(producto2);
