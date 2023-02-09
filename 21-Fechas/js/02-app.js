const diaHoy = new Date();

moment.locale('es');


console.log(moment().format('llll', diaHoy));

console.log(moment().format('MMMM Do YYYY h:mm:ss'));

console.log(moment().add(3, 'days').calendar());