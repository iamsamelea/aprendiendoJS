//ESTRUCTURAS DE CONTROL (if, else, else if)

//SISTEMA PUNTUACIÓN
const puntuacion = 1000;

if( puntuacion === 1000 ) { // (!==) diferente a...,   (==) igual a comparación de valor,    (===) igual a comparación de valor y de tipo de dato.
    console.log('La puntuación es de 1000.');
} else {
    console.log('La puntuación no es de 1000, vuelve a jugar.')
}

//SISTEMA COMPRA
const efectivo = 120;
const carrito = 90;

if( efectivo > carrito ) {
    console.log('Puedes proceder al pago');
} else {
    console.log('Fondos insuficientes');
}


//SISTEMA AUTENTIFICACIÓN TRABAJADORES
const trabajador = 'EDITOR'

if( trabajador === 'ADMINISTRADOR') {
    console.log('Tienes permiso para utilizar todo el sistema');
}else if( trabajador === 'EDITOR') {
    console.log('Tienes acceso al sistema pero no puedes modificar ningún documento');
}else {
    console.log('No tienes permiso para utilizar el sistema');
}