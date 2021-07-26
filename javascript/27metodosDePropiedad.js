//MÉTODOS DE PROPIEDAD

//Creando un reproductor
const reproductor = {
    reproducir: function(id) { //métodos dentro del objeto
        console.log(`Reproduciendo la canción con con el id: ${id}`);
    },
    pausar: function() {
        console.log('Pausando...');
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando la Playlist: ${nombre}`);
    },
    agregarCancion: function(title) {
        console.log(`Agregando la canción: ${title}`);
    }

}

//agregando metodos al objeto desde fuera del objeto
reproductor.borrarCancion = function(id) {
    console.log(`Borrando la canción con el id: ${id}`);
}
reproductor.reproducirPlaylist = function(nombre) {
    console.log(`Reproduciendo la Playlist: ${nombre}`);
}

reproductor.reproducir(2215);
reproductor.pausar();
reproductor.borrarCancion(24);
reproductor.crearPlaylist('Breakbeat');
reproductor.reproducirPlaylist('Breakbeat');
reproductor.agregarCancion('Ross From Friends - March'); 