//ARRAYS O ARREGLOS

//Un array es una variable que permite almacenar un conjunto de datos(en principio relacionados), por ejemplo un carrito de la compra es un array de objetos, donde cada objeto es un producto.
//Declaración de Arrays más utilizada
const numeros = [10,20,30,40,50];
console.table(numeros);

//Declaración de Array poco utilizada
const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo");
console.table(meses);


//Un Array puede contener todo tipo de datos(strings, numeros, booleanos, objetos, arrays)
const arreglo = ["Hola", 100, true, "Agosto", null, {nombre: "Samuel", edad: 26, nacionalidad: "Española"}, [1,2,3]];
console.log(arreglo);




//Acceder a los valores de un Arreglo
console.log(numeros[2]); //Los valores se empiezan a contrar desde la posición 0
console.log(numeros[0]);
console.log(meses[2]);

//Conocer la extensión de un Arreglo(Te dice cuantos valores contiene el arreglo)
console.log(numeros.length);


//Recorrer todo un arreglo(se hace por si hay muchos elementos en el arreglo)
numeros.forEach( function(numeros) {
    console.log(numeros);
});

meses.forEach( function(mes) {
    console.log(mes);
});

arreglo.forEach( function(arreglos) {
    console.log(arreglos);
});



