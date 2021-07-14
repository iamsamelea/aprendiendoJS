//ARRAY METHODS
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const carrito = [
    { nombre: "Monitor 20 pulgadas", precio: 500 },
    { nombre: "Televisión 50 pulgadas", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Auriculares", precio: 200 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Telefono móvil", precio: 500 },
    { nombre: "Altavoces", precio: 300 },
    { nombre: "Ordenador portatil", precio: 800 }

];

//forEach 
const resultado = meses.forEach( function (mes) {
    if( mes === "Marzo") {
        console.log("Marzo si existe");
    }
});

//Includes (el mismo metodo que el forEach pero más simplificado)(Este for each funciona en Arrays que no sean de objetos)
const resultado2 = meses.includes("Marzo");
console.log(resultado2);




//Some (ideal para arreglos de objetos)
const resultado3 = carrito.some(function(producto) {
    return producto.nombre === "Tablet"
});
console.log(resultado3);



//Reduce(Calcula el precio)
const resultado4 = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0); //el 0 es el numero por el que empezamos a calcular
console.log(resultado4);



//Filter
const resultado5 = carrito.filter(function(producto) {
    return producto.precio > 400
});
console.log(resultado5);

const resultado6 = carrito.filter(function(producto) {
    return producto.nombre !== "Teclado"
});
console.log(resultado6);