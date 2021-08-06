//POO-CLASSES EN JS

class Producto{
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de ${this.precio} €.`
    }
}

const producto2 = new Producto('televisión', 250);
const producto3 = new Producto('Ratón RGB', 25);

console.log(producto2);
console.log(producto3);
console.log( producto2.formatearProducto() );
console.log( producto3.formatearProducto() );