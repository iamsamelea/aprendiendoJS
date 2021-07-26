//OBJETOS

// 3 variables para un mismo tipo de producto
const nombreProducto = "Monitor IPS 27 Pulgadas";
const precio = 250;
const disponible = true;


//Objeto
const producto = { //Esto es el objeto
    nombreProducto: "Monitos IPS 27 Pulgadas", //esto son las propiedades
    precio: 250,
    disponible: true
}

console.log(producto);

//Acceder a las distintas propiedades del producto
console.log(producto.nombreProducto); //sintaxis de punto
console.log(producto.precio);
console.log(producto.disponible);


//Forma menos común de acceder a las propiedades del objeto
console.log(producto["nombreProducto"]);
console.log(producto["precio"]);
console.log(producto["disponible"]);
