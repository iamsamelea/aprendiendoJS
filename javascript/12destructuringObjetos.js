//DESRTUCTURING DE OBJETOS

//Objeto
const producto = {
    nombreProducto: "Monitor Full HD 20\"",
    precio: 150,
    disponible: true
}


//Antigua forma de hacer distructuring
    // const precioProducto = producto.precio;
    // const nombreProducto = producto.nombreProducto;//se pueden llamar igual la variable que la propiedad del Objeto porque el nombre de la variable de arriba es producto y no nombreProducto.



    // console.log(precioProducto);
    // console.log(nombreProducto);


//Distructuring
    // const {precio} = producto;
    // const {nombreProducto} = producto;

const {precio, nombreProducto, disponible} = producto; //forma eficiente de destructuring

console.log(precio);
console.log(nombreProducto);
console.log(disponible);
