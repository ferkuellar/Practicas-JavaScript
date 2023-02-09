const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo cacion con el id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando cancion .... ${id}`),
    crearPlaylist: nombre => console.log(`Creando playlist de ${nombre}`),
    reproducirPlaylis: nombre =>console.log(`Reproduciendo la playlist ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    } 
}

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;

reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.reproducir(10)
reproductor.pausar();
reproductor.crearPlaylist('Heavy Metal');
reproductor.crearPlaylist('Rock 90`s');
reproductor.reproducirPlaylis('Heavy Metal');