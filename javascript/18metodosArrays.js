//METODOS PARA LOS ARRAYS
//UN ARRAY SE RECOMIENDA NUNCA MODIFICAR NINGUN VALOR


//SPREAD OPERATOR La mejor forma de agregar valores a un Arreglo(Ya que no modificas el Arreglo original)
const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

const nuevoArreglo = [...dias, "Sábado", "Domingo"]; //Para agregar al principio del Arrreglo solo hay que cambiar el orden del Spread Operator
console.table(nuevoArreglo);





//Agregar valores a un Arreglo
const numeros = [10,20,30,40,50];

numeros.push(60,70,80); //Agrega valores al final del arreglo
numeros.unshift(-10,-20,-30); //Agrega valores al principio del arreglo
console.table(numeros);




//Eliminar valores de un Arreglo
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

meses.pop();//Elimina el ultimo valor del arreglo
meses.shift();//Elimina el primer valor del arreglo
meses.splice(1, 1);//Elimina el valor que se quiera, en el parentesis primero va la ubicación del valor y seguidamente cuantos valores queresmos eliminar apartir del mismo.

console.table(meses);








