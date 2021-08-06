//PROTOTYPE


//Object Constructor 
function Producto(nombre, precio, disponible) { 
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto('Monitor Gaming', 250, 'disponible');
const producto3 = new Producto('ratón RGB', 40, 'no disponible');
const producto4 = new Producto('Mousepad Negro', 15, 'disponible');
const producto5 = new Producto('Laptop', 800, 'disponible');


//Prototype (formatear el objeto y con solo 1 línea de código poder utilizarlo)
Producto.prototype.formatearProducto = function() {
    return `El ${this.nombre} con un precio de ${this.precio} €, está ${this.disponible}.`;
}

console.log( producto2.formatearProducto() );
console.log( producto3.formatearProducto() );
console.log( producto4.formatearProducto() );
console.log( producto5.formatearProducto() );

/* Con el prototype primero se tiene que poner el mismo nombre que el Objeto en este caso Producto, seguidamente un punto con el método prototype y despues de otro punto el nombre de la nueva función, despues le asignamos el valor de la función*/
/* Este método se utiliza para poder imprimir en pantalla la suficiente cantidad de datos que necesitemos sin tener que escribir muchas funciones, pero siempre será solo reutilizable con el mismo tipo de Objeto no con otros, en este caso solo con los de Producto*/


