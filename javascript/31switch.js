//SWITCH (como el if, else, else if pero utilizado por si hay más de una opción de cada)

const metodoPago = 'tarjeta';

switch(metodoPago) {
    case 'tarjeta':
        console.log('se ha pagado con tarjeta');
        break;
    case 'efectivo':
        console.log('se ha pagado en efectivo');
        break;
    case 'cheque':
        console.log('se ha pagado en cheque');
        break;
    case 'bitcoin':
        console.log('se ha pagado con bitcoin')
        break;
    default:
        console.log('no se ha pagado');
        break;
}