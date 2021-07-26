//STRINGS

const nombre = 'Samuel'; //la forma más utilizada
const nombre2 = String('Roser'); //no se utiliza mucho
const nombre3 = new String('Aguilar');//no se utiliza mucho

console.log(nombre);
console.log(typeof nombre2);
console.log(typeof nombre3); //el typeof te dice que tipo de dato es, esta ultima forma es un objeto

//METODO PARA STRINGS

let tweet = 'Aprendiendo JavaScript poco a poco con un curso de Juan en Udemy';
let producto = 'Monitor Full HD 24"';
const email = 'correo@correo.com';



//indexOf (retorna la posición de la letra o de la palabra)(si el número que retorna en la consola es positivo existe el texto o valor, si es negativo no existe)
console.log(tweet.indexOf('JavaScript'));
console.log(producto.indexOf('H'));
console.log(email.indexOf('@'));

//includes (retorna true o false)
console.log(tweet.includes('Udemy'));
console.log(producto.includes('MSI'));
console.log(email.includes('@'));


// PD:EXISTEN MUCHOS MAS METODOS PARA STRINGS



