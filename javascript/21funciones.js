//FUNCIONES

//Declaración de una función
function sumar() {
    console.log(10 + 10)
}

sumar(); //Así se llama a una función


//Expresión de una función
const sumar2 = function() {
    console.log(4 + 4)
}

sumar2();



//IIFE (esta función se llama a ella sola)
(function() {
    console.log("Esto es una función")
})();