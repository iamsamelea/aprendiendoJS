//FOREACH Y MAP (solo se utilizan para arreglos(arrays) de objetos).

const carrito = [
    { nombre: "Monitor 20 pulgadas", precio: 500 },
    { nombre: "Televisión 50 pulgadas", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Auriculares", precio: 200 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Telefono móvil", precio: 500 },
    { nombre: "Altavoces", precio: 300 },
    { nombre: "Ordenador portatil", precio: 800 }

];

//forEach
    // carrito.forEach(function(producto) {
    //     console.log(producto.nombre);
    // });

carrito.forEach( producto => console.log(producto.nombre) );//con Arrow Function

/*Los métodos forEach y map hacen cosas practicamente identicas, pero el forEach tan solo sirve para imprimir en consola el Array ya que si utilizamos return no funcionará(undefined)*/




//map
    // let arreglo2 = carrito.map(function(producto) {
    //     return producto.nombre
    //  });
    //  console.log(arreglo2);

let arreglo2 = carrito.map(producto => producto.nombre); //con Arrow Function
console.log(arreglo2);

/*El método map(método porque el map va despues del punto) la diferencia que tiene con el forEach és que sirve para crear nuevos arreglos o trabajar con los arreglos ya existentes, ya que utiliza el metodo return si que funciona y tenemos que crear una nueva variable para el nuevo arreglo*/
