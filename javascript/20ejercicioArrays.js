//EJERCICIO ARREGLOS
const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

const carrito = [
    { nombreProducto: "Monitor 24 pulgadas", precio: 150 },
    { nombreProducto: "Teclado Mecánico", precio: 90 },
    { nombreProducto: "Ratón gaming", precio: 40 },
    { nombreProducto: "Altavoces", precio: 130 },
    { nombreProducto: "Alfombrilla", precio: 20 }
];


//Agregar valores a un arreglo(forma antigua y NO RECOMENDADA)
const meses = ["Enero", "Febrero", "Marzo", "Abril"];

meses.push("Mayo", "Junio", "Julio", "Agosto");
meses.unshift("Septiembre", "Octubre", "Noviembre", "Diciembre");
console.table(meses);


//Eliminar valores a un arreglo(forma antigua y NO RECOMENDADA)
const horas = ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00"];

horas.pop();
horas.shift();
horas.splice(3, 2);
console.table(horas);


//SPREAD OPERATOR o REST OPERATOR la mejor forma de combinar arrays o de modificar valores
const nuevasHoras = [...horas, "9:00", "10:00", "11:00", "12:00"];
console.table(nuevasHoras);








//Acceder a los valores de un Arreglo
console.log(dias[2]);
console.log(numeros[4]);
console.log(carrito[2]);




//Conocer la extensión de un Arreglo
console.log(numeros.length);
console.log(dias.length);
console.log(carrito.length);




//forEach
dias.forEach(function(dia) {
    console.log(dia);
});

numeros.forEach(function(numeros) {
    console.log(numeros);
});

carrito.forEach(function(nombre) {
    console.log(nombre);
});




//forEach condicional
const resultadoDias = dias.forEach(function(dias) {
    if(dias === "Lunes") {
        console.log("Tenemos un Lunes a la semana");
    }
});




//Includes(NO FUNCIONA CON ARRAYS DE OBJETOS)
const resultadoIncludes = dias.includes("Martes");
console.log(resultadoIncludes);




//Some (IDEAL PARA ARREGLOS DE OBJETOS)
const resultadoSome = carrito.some(function(producto) {
    return producto.nombre = "Monitor"
});
console.log(resultadoSome);




//Reduce
const resultadoReduce = carrito.reduce(function(total, producto) {
    return total + producto.precio
}, 0);
console.log(resultadoReduce);




//Filter
const resultadoFilter = carrito.filter(function(producto) {
    return producto.precio < 250
});
console.log(resultadoFilter);

const resultadoFilter2 = carrito.filter(function(producto) {
    return producto.precio > 250
});
console.log(resultadoFilter2);

const resultadoFilter3 = carrito.filter(function(producto) {
    return producto.nombreProducto !== "Altavoces"
});
console.log(resultadoFilter3);

