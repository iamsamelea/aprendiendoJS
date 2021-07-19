//HOSTING JAVASCRIPT
/*JS corre dos veces por el código, la primera lee las funciones y la segunda vez las manda llamar*/

//Declaración de la función
sumar();
function sumar() {
    console.log(10 + 10)
}

//Esta funcion al ser una funcion como tal si que la puedes llamar antes y se verá en la consola.


//Expresión de una función
sumar2();
const sumar2 = function() {
    console.log(4 + 4)
}

//Esta funcion es mas una variable por eso no se verá en la consola si la mandamos llamar antes.