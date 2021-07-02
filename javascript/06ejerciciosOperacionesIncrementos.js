//Calcula el precio total del carrito con un IVA del 21% y un descuento previo del 15%

//Productos
const camiseta1 = 20;
const camiseta2 = 25;
const pantalon = 40;
const gorra = 20;
const sudadera = 49;

//Total carrito
resultado = camiseta1 + camiseta2 + pantalon + gorra + sudadera;
console.log(resultado);

//Cálculo descuento 15%
let descuento = resultado * .15; //math.ceil para redondear a un numero entero sin decimales
console.log(descuento);

//Total carrito menos descuento
let resultado1 = resultado - descuento;
console.log(resultado1);

//calculo de IVA 21%
let impuesto;

impuesto = resultado1 * 0.21;
console.log(impuesto);

//Total tiquet compra
const totalCompra = Math.floor (+resultado1 + impuesto);
console.log(totalCompra);