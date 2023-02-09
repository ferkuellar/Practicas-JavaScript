iniciarApp();

function iniciarApp() {
    console.log('Iniciando App...');
    segundaFuncion();
}

function segundaFuncion() {
    console.log('Desde la segunda funcion');
    ususarioAutenticado('Pablo');
}


function ususarioAutenticado(usuario) {
    console.log('Autenticando usuario.... espere..');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}