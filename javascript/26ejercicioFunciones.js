//EJERCICIO FUNCIONES

//Declaración de una función
function sumar() {
    console.log(3 + 3)
}
sumar();

//Expresión de una función
const restar = function() {
    console.log(10 - 5)
}
restar();






//Hosting JS
//declarar la función es válido si la llamas previamente
sumar2();
function sumar2() {
    console.log(6 + 6)
}


// //expresar la función da error si la llamas previamente
// restar2();
// const restar2 = function() {
//     console.log(20 - 5)
// }






//Diferencias entre funciones y métodos
const numero1 = 20;
const numero2 = "25";

console.log(numero1.toString()); //método
console.log(parseInt(numero2)); //función







//Funciones con parámetros y argumentos
function sumar3(numero1, numero2) {
    console.log(numero1 + numero2)
}
sumar3(2, 2);
sumar3(10, 4);
sumar3(11, 1);


function restar3(n1 = 0, n2 = 0) {
    console.log(n1 - n2)
}
restar3(20 - 3);
restar3();
restar3(6);






//Funciones que retornan valores
function retornar(n1, n2) {
    return n1 + n2
}

const resultadoRetornar = retornar(10, 9);
console.log(resultadoRetornar);

//Función carrito de la compra
let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

agregarCarrito(200);
agregarCarrito(1000);
agregarCarrito(150);
agregarCarrito(250);


function calcularImpuesto(total) {
    return total * 1.21
}

const totalAPagar = calcularImpuesto(total);

console.log(`La factura final es de ${totalAPagar} €`);