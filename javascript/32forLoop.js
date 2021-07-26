//FOR LOOP

// for( let i = 0; i < 10; i++ ) { //let i = 0 (se le llama indice o valor inicial) crea el valor de la variable con la que vamos a trabajar //i < 10(se le llama condición) se le pide que muestre siempre que i sea mas pequeño que 10 //i++(se le llama incremento) agregra siempre 1 más a i
//     console.log(i);
// }


//Sacar numeros pares con Foor Loop
// for( let i = 0; i < 100; i++ ) {
//     if( i % 2 === 0) { //con el % le decimos que el número sea multiplo de 2 y entonces el residuo es 0, los numeros con residuo 0 son pares y con otro residuo impares
//         console.log(`El número ${i} es PAR`);
//     }else {
//         console.log(`El número ${i} es IMPAR`);
//     }
// }


//Utilizando FOR LOOP en un carrito
const carrito = [
    { nombre: "Monitor 20 pulgadas", precio: 500 },
    { nombre: "Televisión 50 pulgadas", precio: 500 },
    { nombre: "Tablet", precio: 500 },
    { nombre: "Auriculares", precio: 500 },
    { nombre: "Teclado", precio: 800 },
    { nombre: "Telefono móvil", precio: 800 },
    { nombre: "Altavoces", precio: 800 },
    { nombre: "Ordenador portatil", precio: 500 }
];

//imprimiendo en consola los que tiene un precio menor a 500
for( let i = 0; i < carrito.length; i++) {
    if( carrito[i].precio < 700) {
        console.log(carrito[i].nombre); 
    }
}