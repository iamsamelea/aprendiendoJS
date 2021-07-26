//EJERCICIOS ARRAYS, METODOS DE PROPIEDAD Y ARROW FUNCTIONS
//ARRAYS
const meses = ["Enero", "Febrero", "Marzo", "Abril"];

const diasMes = [1,2,3,4,5,6,7,8,9,10];

const productos1 = [
    {nombreProducto: "Monitor HD", precio: 150 },
    {nombreProducto: "Teclado Mecánico", precio: 100 },
    {nombreProducto: "Ratón RGB", precio: 45 },
    {nombreProducto: "Disco Duro SSD 1TB", precio: 190 },
    {nombreProducto: "Memorias Ram 2x8gb", precio: 90 }
];

const productos2 = [
    { nombreProducto: "Iphone 12", precio: 750 },
    { nombreProducto: "Ipad", precio: 400 }
];


//posicion de un valor de un array
console.log(meses[1]);
console.log(productos1[2]);

//Conocer la extensión de un arreglo
console.log(meses.length);
console.log(productos1.length);

//Agergar valores a un Array(forma no recomendada)
meses.push("Mayo", "Junio");
meses.unshift("Diciembre");
console.table(meses);

//Eliminar valores a un Array(forma no recomendada)
diasMes.pop();
diasMes.shift();
diasMes.splice(1, 2);
console.table(diasMes);

//SpreadOperator o RestOperator(unir dos arrays, agragar o modificar esta es la mejor forma)
const meses2 = [...meses, "Julio", "Agosto"];
console.table(meses2);

const productosTotal = [...productos1, ...productos2];
console.table(productosTotal);


//forEach (normal y con Arrow Functions)

    // meses.forEach( function(mes) {
    //     console.log(mes);
    // });
const resultado1Meses = meses.forEach( mes => console.log(mes) );


//Includes
const Resultado2Meses = console.log (meses.includes("Febrero"));


//Some
    // const resultado3Meses = productos1.some(function(producto) {
    //     producto.nombreProducto === "Monitor HD"
    // });
const resultado3Productos = productos1.some( producto => producto.nombreProducto === "Monituter" );
console.log(resultado3Productos);


//Reduce
    // const resultado4Productos = productos1.reduce(function(total, producto) {
    //     return total + producto.precio
    // },0);
    // console.log(resultado4Productos);
const resultado4Productos = productos1.reduce((total, producto) => total + producto.precio,0);
console.log(resultado4Productos);


//Filter
    // const resultado5Productos = productos1.filter(function(producto) {
    //    return producto.precio < 200
    // });
    // console.table(resultado5Productos);
const resultado5Productos = productos1.filter( producto => producto.precio < 200 );
console.table(resultado5Productos);


//Funciones que retornan valores
function sumar(n1=0, n2=0) {
    return n1 + n2 
}

let resultado6Sumar;
resultado6Sumar = sumar(5, 10);
console.log(resultado6Sumar);

//Metodos de propiedad (creando un reproductor de música)
const reproductor = {
    encenderReproductor: function() {
        console.log('Encendiendo reproductor, Bienvenid@ :)')
    },
    reproducir: function(id) {
        console.log(`Reproducir la canción con el id ${id}`);
    },
    pausar: function() {
        console.log('Pausando...');
    },
    borrarCancion: function(id) {
        console.log(`Borrando la canción con el id ${id}`);
    },
    crearPlaylist: function(nombre) {
        console.log(`Se ha creado la playlist con el nombre: ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`);
    },
    apagarReproductor: function() {
        console.log('Apagando...');
    }
}
reproductor.encenderPantalla = function() {
    console.log('Se ha encendido la pantalla');
}

reproductor.encenderReproductor();
reproductor.encenderPantalla();
reproductor.reproducir(655);
reproductor.pausar();
reproductor.borrarCancion(890);
reproductor.crearPlaylist('Fuse London');
reproductor.reproducirPlaylist('Fuse London');
reproductor.apagarReproductor();
