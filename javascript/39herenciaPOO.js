//HERENCIA POO

//Classe padre
class Producto{
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de ${this.precio}€`
    }


    obtenerPrecio() {
        console.log(this.precio);
    }
}

const producto2 = new Producto('televisión', 250);
const producto3 = new Producto('Ratón RGB', 25);

console.log(producto2);
console.log(producto3);
console.log( producto2.formatearProducto() );
console.log( producto3.formatearProducto() );
console.log(producto2.obtenerPrecio() );


            //Segunda clase (así no se debe de hacer para no duplicar código)
            // class Libro{
            //     constructor(nombre, precio, isbn) { //nombre y precio se duplican
            //         this.nombre = nombre;
            //         this.precio = precio;
            //         this.isbn = isbn;
            //     }

            //     formatearLibro() { 
            //         return `El libro ${this.nombre}, tiene un precio de ${this.precio}€, y su isbn es: ${this.isbn}`; //hasta llegar a el precio se duplica
            //     }
            // }

            // const libro1 = new Libro('Elantris', 12, '1848348720093165');

            // console.log(libro1.formatearLibro() );




//Herencia Correcta de la clase padre
class Libro extends Producto{ //con la palabra reservada extends hereda lo de la classe padre Producto
    constructor(nombre, precio, isbn) { 
        super(nombre, precio); //con super heredan nombre y precio que ya lo tienen en la classe padre Producto, así no se duplica
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()}, y su isbn és ${this.isbn}`;
    }
    
    obtenerPrecio() {
        super.obtenerPrecio();
        console.log('Si hay unidades disponibles');
    }
}

const libro1 = new Libro('Elantris', 12, '1848348720093165');
const libro2 = new Libro('Harry Potter', 15, '1254789630164529');

console.log(libro1.formatearProducto() );
console.log(libro2.formatearProducto() );
console.log(libro1.obtenerPrecio() );