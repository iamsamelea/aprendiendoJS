//PROMISES
//Promises se utiliza como un promesa en la vida real, puede ser código que se cumplirá, o puede que no.

const usuarioAutenticado = new Promise ( function(resolve, reject) {
    const auth = false;

    if (auth) {
        resolve('Usuario Autenticado');
    } else {
        reject('No se ha podido iniciar sesión');
    }
})

console.log(usuarioAutenticado);

//Para que en la consola salga el mensaje de resolve hay que hacer lo siguiente

usuarioAutenticado
    .then( function(resultado) {
        console.log(resultado);
    })
    .catch( function(error) {
        console.log(error);
    })