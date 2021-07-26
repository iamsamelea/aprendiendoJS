//VARIABLES CON VAR Y LET (son iguales, se pueden reasignar los valores e inicializarse sin valor)
var disco1 = 'Vinilo House Francés';
disco1 = 'Pop Francés'; //reasignando el valor de la variable anterior.

let disco2; //declarada sin valor, se le asigna debajo
disco2 = 'Vinilo Breakbeat UK';

var disco3 = 'Minimal Rumano', //distintas variables utilizando solo una vez la palabra reservada var
    precio3 = 11,
    disponible3 = true;

console.log(disco1);
console.log(disco2);
console.log(disco3);
console.log(precio3);
console.log(disponible3);

//VARIABLES CON CONST (NO se puede reasignar el valor NI inicializarse sin valor, es una variable que se mantendrá fija durante todo el desarrollo)
const discoVinilo = 'Movida Madrileña';

console.log(discoVinilo);