/*ACTIVIDAD 02*/
/* DECLARAR VARIABLES DE OBJETOS, HECHO
MODIFICAR LOS OBJETOS, HECHO
OBJECT METHOD A UN OBJETO(FREEZE), HECHO
UNIR OBJETOS CON SPREAD OPERATOR, HECHO
UTILIZAR EL OBJETO MATH PARA REDONDEAR LOS PRECIOS, HECHO
HACER OPERACIONES CON EL PRECIO DE LOS OBJETOS, HECHO
HACER UN DESTRUCTURING DE UN OBJETO,
UTILIZAR TEMPLATE STRINGS*/

//Objetos
const disco1 = {
    artista: "Luca Lozano",
    album: "Boss Moves EP",
    precio: 19.60,
    disponible: true
}

const disco2 = {
    artista: "OCB",
    album: "FM Bass Trax",
    precio: 10.40,
    disponible: true
}

const disco3 = {
    artista: "Ross from Friends",
    album: "Aphelion EP",
    precio: 54.58,
    disponible: true
}

const medidasGrande = {
    tamañoDisco: "12\"",
    color: "negro"
}

const medidasPequeño = {
    tamañoDisco: "7\"",
    color: "negro"
}



//Modificacion Objetos
disco1.precio = 19.69;
disco2.disponible = false;



//Object Methods
Object.seal(disco1);


//SpreadOperator
const disco1Completo = { ...disco1, ...medidasGrande };
const disco2Completo = { ...disco2, ...medidasPequeño };
const disco3Completo = { ...disco3, ...medidasGrande };


//Redondear precio con Math
disco1Completo.precio = Math.ceil(disco1.precio);
disco2Completo.precio = Math.ceil(disco2.precio);
disco3Completo.precio = Math.ceil(disco3.precio);



//Calcular IVA 21% 
const impuestoIva = (disco1Completo.precio + disco2Completo.precio + disco3Completo.precio) * 0.21; //Total IVA



//Total Carrito con IVA incluido
let totalCarrito = disco1Completo.precio + disco2Completo.precio + disco3Completo.precio + impuestoIva;



console.log(`Álbum: ${disco1Completo.album}, Artista: ${disco1Completo.artista}, Precio: ${disco1Completo.precio} €`);
console.log(`Álbum: ${disco2Completo.album}, Artista: ${disco2Completo.artista}, Precio: ${disco2Completo.precio} €`);
console.log(`Álbum: ${disco3Completo.album}, Artista: ${disco3Completo.artista}, Precio: ${disco3Completo.precio} €`);
console.log("··········CALCULANDO IVA 21%··········");
console.log(`Total IVA 21%: ${impuestoIva} €`);
console.log("··········CALCULANDO TOTAL A PAGAR··········");
console.log(`TOTAL A PAGAR POR LA ADQUISICIÓN DE TREMENDOS DISCAZOS ${totalCarrito} €`);


//DESTRUCTURING DISCO 2
// console.log(`ACTIVIDAD OPCIONAL DE DESTRUCTURING`);

// const {artista, album, precio, disponible} = disco1;
// console.log(artista);
// console.log(album);
// console.log(precio);
// console.log(disponible);