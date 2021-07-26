//ARROW FUNCTIONS
//Si dentro de la función solo hay 1 propiedad(el valor en naranja dentro del paréntesis) el parentesis que lo envuelve lo podemos eliminar, pero si hay 2 propiedades no se puede eliminar el parentesis.
//cuando hay un return, se puede eliminar ya que en el arrow function se da por sentado de que donde va el return ya existe un return. 

//Funcion normal
const arrow = function(n1, n2) {
    console.log(n1 + n2);
}
arrow(25, 2);

//Misma función con Arrow Function
const arrow2 = (n1, n2) => console.log(n1 + n2);
arrow2(25, 3);
console.log(arrow2);





//Arrow Functions en Arrays(donde mejor funcionan)
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

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
const resultado = meses.forEach(  mes => {
    if( mes === "Marzo") {
        console.log("Marzo si existe");
    }
});

//Includes
const resultado2 = meses.includes("Marzo");
console.log(resultado2);




//Some (ideal para arreglos de objetos)
const resultado3 = carrito.some( producto => producto.nombre === "Tablet"); //Cuando hay un return tambien se quita y funcionará igual.
console.log(resultado3);



//Reduce(Calcula el precio)
const resultado4 = carrito.reduce((total, producto) => total + producto.precio, 0); 
console.log(resultado4);



//Filter
const resultado5 = carrito.filter( producto => producto.precio > 400);
console.table(resultado5);

const resultado6 = carrito.filter( producto => producto.nombre !== "Teclado");
console.table(resultado6);
