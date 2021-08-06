//Ejercicio forEach y map

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
carrito.forEach (producto => console.log(producto.nombre)); 

//map
const resultado = carrito.map(producto => producto.nombre);
console.log(resultado);