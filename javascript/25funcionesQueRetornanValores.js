//FUNCIONES QUE RETORNAN VALORES

//Forma explicativa de como hacer una función que sea reutilizable en una variable o cualquier otra operación.
function sumar(n1, n2) {
    return n1 + n2;
}

const resultado = sumar(1, 5);
console.log(resultado);



//Función carrito de la compra
let total = 0; //El total empieza con un valor de 0.

function agregarCarrito(precio) {
    return total += precio; //el total es igual y se va sumando los argumentos de precio.
}

function calcularImpuesto(total) {
    return total * 1.21; //el total por el 1.21 para calcular el IVA y que se sume al precio total de los productos
}

total = agregarCarrito(100);
total = agregarCarrito(400);
total = agregarCarrito(150); //se agregan al carrito los productos y el precio es el argumento ya que viene desde la primera función.

console.log(total);

const totalAPagar = calcularImpuesto(total); //se crea una nueva varable que trabaja sobre la funcion de calcular impuesto y el valor sobre que lo calcula es el total del carrito.

console.log(`Total a pagar por la compra ${totalAPagar} €`);