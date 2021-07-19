//FUNCIONES CON PARAMETROS Y ARGUMENTOS (mucho más reutilizable)

function sumar(numero1, numero2) { //numero1 y numero2 son parámetros
    console.log( numero1 + numero2 )
}
sumar(10, 10); // Argumentos o valores reales
sumar(3, 3);
sumar(1, 13);
sumar(1); // da error en la función sumar3 se da la solución de porque da error


const sumar2 = function(n1, n2) {
    console.log(n1 + n2)
}
sumar2(10, 5);
sumar2(11, 1);
sumar2(1, 2);

function sumar(numero1 = 0, numero2 = 0) { //al darle un valor de 0 de serie siempre será un número y si no le pones valor no dará NaN (así funcionan los formularios de validación de muchos sitos al no escribir argumentos)
    console.log( numero1 + numero2 )
}
sumar(); 
sumar(3);
sumar(12);
sumar(1);