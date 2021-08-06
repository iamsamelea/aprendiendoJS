//THIS, OBJECT CONSTRUCTOR Y PROTOTYPE

//Object Constructor
function Cliente(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const cliente2 = new Cliente('Carlos', 'García', 29);
const cliente3 = new Cliente('Ramón', 'Sánchez', 56);


function Producto(nombre, precio, disponible) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto('televisión', 250, 'no disponible');
const producto3 = new Producto('Ratón RGB', 25, 'disponible');

Cliente.prototype.formatearCliente = function() {
    return `El cliente ${this.nombre} ${this.apellido} tiene ${this.edad} años.`
}

Producto.prototype.formatearProducto = function() {
    return `El producto ${this.nombre} tiene un precio de ${this.precio} €.`
}

console.log( cliente2.formatearCliente() );
console.log( cliente3.formatearCliente() );

console.log( producto2.formatearProducto() );
console.log( producto3.formatearProducto() );