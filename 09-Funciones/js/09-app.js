const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cacion con el id ${id}...`);
    },
    pausar: function(){
        console.log('pausando...');
    },
    crearPlaylist: function(nombre) {
        console.log(`Creando playlist de ${nombre}`);
    },
    reproducirPlaylis: function(nombre) {
        console.log(`Reproduciendo la playlist ${nombre}`);
    }
}

reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.reproducir(10)
reproductor.pausar();
reproductor.crearPlaylist('Heavy Metal');
reproductor.crearPlaylist('Rock 90`s');
reproductor.reproducirPlaylis('Heavy Metal');
