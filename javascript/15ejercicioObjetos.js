//EJERCICIO OBJETOS

//Crear 5 Objetos con 3 propiedades.
const producto1 = {
    nombreProducto: "Ratón Gaming",
    precio: 25,
    disponible: true
}

const caracteristicasProducto1 = {
    color: "negro",
    tamaño: "mediano",
    rgb: true
}

const producto2 = {
    nombreProducto: "Auriculares Gaming",
    precio: 90,
    color: "rojo",
    oferta: true,
    disponible: true
}

const producto3 = {
    nombreProducto: "Teclado Mecánico",
    precio: 100,
    disponible: true
}

const producto4 = {
    nombreProducto: "Monitor 144hz",
    precio: 200,
    disponible: true
}

const producto5 = {
    nombreProducto: "Micrófono Streaming",
    precio: 180,
    disponible: true
}



//Editar 2 objetos, agregando, quitando y modificando.
producto4.nombreProducto = "Monitor 244hz";
producto4.precio = 360;

delete producto2.color;
delete producto2.oferta;

producto5.color = "negro";
producto5.patron = "Cardioide";



//Destructuring de Monitor
const { nombreProducto, precio, disponible } = producto2;



//Hacer Freeze y seal a producto1 y producto3
Object.freeze(producto1);
Object.seal(producto3);

//Console para ver si los objetos estan frozen y sealed
console.log(Object.isFrozen(producto1));
console.log(Object.isSealed(producto3));



//Unir producto 1 y caracteristicas con Spread Operator
const ratonCompleto = { ...producto1, ...caracteristicasProducto1 };




console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);


//cosole de destructuring
console.log(nombreProducto);
console.log(precio);
console.log(disponible);


//console Spread Operator
console.log(ratonCompleto);