//TRY CATCH
/*cuando JS detecta un erros deja de funcionar correctamente, entonces por eso se utiliza el try catch, para que el código no se rompa, pero solo se utiliza en situaciones donde necesitamos que el código siga funcionando sin dar errores como por ejemplo en el banco al pagar o cosas por el estilo */

const precio1 = 10;
const precio3 = 30;

console.log(precio1);

try { //Ahora avias del error pero no para el código
    console.log(precio2); //este daba error porque no estaba asignada la variable
} catch (error) {
    console.log(error); //para imprimir el error en la consola
}

console.log(precio3);