//POO

//Object Literal (lo que se conoce como objeto)
const producto = {
    nombre: 'Teclado',
    precio: '60',
    disponible: true
}


//Object Constructor (més dinámico ya que con una función podemos crear distintos objetos a nuestro gusto)
function Producto(nombre, precio, disponible) { //El nombre del Object constructor siempre tiene que empezar con Mayúsculas
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = disponible;
}

const producto2 = new Producto('Monitor Gaming', 250, true);
const producto3 = new Producto('ratón RGB', 40, false);
const producto4 = new Producto('Mousepad Negro', 15, true);
const producto5 = new Producto('Laptop', 800, true);

console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);
