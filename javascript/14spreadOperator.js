//SPREAD OPERATOR
const producto = {
    nombreProducto: "Monitor Full HD 20\"",
    precio: 150,
    disponible: true
}

const caracteristicas = {
    medidas: "40 cm",
    peso: "1.5 kg"
}

const nuevoProducto = { ...producto, ...caracteristicas}; //se unen los objetos con el spread Operator.

console.log(producto);
console.log(nuevoProducto);