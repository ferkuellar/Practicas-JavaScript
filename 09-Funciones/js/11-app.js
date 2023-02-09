// Los dos codigos son lo mismo
const aprendiendo = function(tecnologia, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}

aprendiendo('JavaScript', 'Node.js')


const aprediendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;
console.log(aprediendo2('JavaScript', 'Node.js'));