const producto = "Televisor SONY 50\""
const precio = 499;

//Concatenación
console.log(producto + precio); //solo concatenando las variables
console.log("El producto és un " + producto + " con un precio de " + precio + " euros."); //forma de concatenar poco usada
console.log("El producto és un", producto ,"con un precio de", precio ,"euros."); //forma de concatenar poco usada


//Template Strings o Strings Literals
console.log(`El producto és un ${producto} con un precio de ${precio} euros.`); //La mejor forma te concatenar variables con texto escrito