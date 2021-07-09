/* Crea 3 productos diferentes con el valor del precio y 3 con valor de string para cada producto, HECHO
redondear el total del precio sin descuento hacia arriba, HECHO
aplicales un 15% de descuento a cada uno, HECHO
crea un total descuento; HECHO
redondea el descuento hacia abajo, HECHO
aplicar el IVA del 21% individual, HECHO
aplicar IVA total;
dar precio total, 
en cada producto buscar si contiene la palabra o en que posición se encuentra alguna palabra o número,
concatenación y template strings */

//VARIABLES
let producto1 = "Tarjeta gráfica EVGA RTX 2060",
    precio1 = 419.89;

let producto2 = "Monitor LG 27GL63T B 27 LED IPS FullHD 144Hz HDR",
    precio2 = 230.99;

let producto3 = "Auriculares Gaming Logitech G432",
    precio3 = 49.01;


//REDONDEO HACIA ARRIBA
precio1 = Math.ceil(precio1);
precio2 = Math.ceil(precio2);
precio3 = Math.ceil(precio3);



//DESCUENTOS INDIVIDUALES
let descuento1;
let descuento2;
let descuento3;

descuento1 = Math.floor(precio1 * 0.15);
descuento2 = Math.floor(precio2 * 0.15);
descuento3 = Math.floor(precio3 * 0.15);



//DESCUENTO TOTAL
let descuentoTotal;

descuentoTotal = descuento1 + descuento2 + descuento3;



//CALCULANDO PRECIOS CON DESCUENTO
precio1 = precio1 - descuento1;
precio2 = precio2 - descuento2;
precio3 = precio3 - descuento3; 



//TOTAL PRODUCTOS SIN IVA
let totalProductosSinImpuesto;

totalProductosSinImpuesto = precio1 + precio2 + precio3;



//IVA 21% INDIVIDUAL
let impuesto1;
let impuesto2;
let impuesto3;

impuesto1 = precio1 * 0.21;
impuesto2 = precio2 * 0.21;
impuesto3 = precio3 * 0.21;



//IVA 21% TOTAL
let totalIva;

totalIva = impuesto1 + impuesto2 + impuesto3;



//PRECIO FINAL DE LA COMPRA
let precioFinal;

precioFinal = totalProductosSinImpuesto + totalIva;

//CONCATENACIÓN Y PRECIO TOTAL
console.log(`El producto: ${producto1} tiene un precio de ${precio1} € aplicando el 15% de descuento.`);
console.log(`El producto: ${producto2} tiene un precio de ${precio2} € aplicando el 15% de descuento.`);
console.log(`El producto: ${producto3} tiene un precio de ${precio3} € aplicando el 15% de descuento.`);
console.log(`La suma total de los descuentos es de ${descuentoTotal} €.`);
console.log('············CALCULANDO TOTAL PRODUCTOS CON DESCUENTO DEL 15%············')
console.log(`El total de los 3 productos antes de impuestos es de ${totalProductosSinImpuesto} €.`);
console.log(`La suma total del IVA és de ${totalIva} €.`);
console.log('············CALCULANDO PRECIO PRODUCTOS MÁS IVA············');
console.log(`El total a pagar por el comprador és de ${precioFinal} €.`);
console.log('Mensaje del vendedor: si tiene algun problema no dude en llamarnos :)');
