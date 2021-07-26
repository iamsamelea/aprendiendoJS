const metodoPago = function(nombre) {
    return nombre;
}
metodoPago('efectivo');

switch(metodoPago) {
    case metodoPago('tarjeta'):
        console.log('se ha pagado con tarjeta');
        break;
    case metodoPago('efectivo'):
        console.log('se ha pagado en efectivo');
        break;
}

console.log(metodoPago);
