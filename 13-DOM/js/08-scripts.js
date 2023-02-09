const navegacion = document.querySelector('.navegacion');
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild); //los espacios en blanco son cnsiderados elementos
//console.log(navegacion.children); //los espacios en blanco son cnsiderados elementos


//console.log(navegacion.children[0].nodeName);
//console.log(navegacion.children[1].nodeType);

const card = document.querySelector('.card');

//card.children[1].children[1].textContent = 'nuevo heading desde traversy de dome';
//card.children[0].src = 'img/hacer3.jpg' ;

//console.log(card.children[0]);

//travesing de hijo al padre

//console.log(card.parentNode);
//console.log(card.parentElement.parentElement.parentElement);

//console.log(card.nextElementSibling.nextElementSibling);

//const ultimoCard = document.querySelector('.card:nth-child(4)');
//console.log(ultimoCard.previousElementSibling);