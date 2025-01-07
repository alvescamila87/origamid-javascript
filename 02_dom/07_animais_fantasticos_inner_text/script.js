// Traversing e Manipulação

const h1 = document.querySelector('h1')
const animaisLista = document.querySelector('.animais-descricao')

console.log("HTML" , h1.innerHTML)
console.log("text" , h1.innerText)

console.log("animais html" , animaisLista.innerHTML)
console.log("animais text" , animaisLista.innerText)

console.log("HTML" , h1.innerHTML)
console.log("text" , h1.innerText)
console.log("outer" , h1.outerHTML)


h1.outerHTML = `<p>Novo título</p>`


// outerHTML, innerHTML e innerText
const menu = document.querySelector('.menu');

menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags

menu.innerText = '<p>Texto</p>'; // a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada

// Trasversing

const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho


const lista2 = document.querySelector('.animais-lista');

lista2.previousElementSibling; // elemento acima
lista2.previousSibling; // node acima

lista2.firstChild; // primeiro node child
lista2.childNodes; // todos os node child

console.log("Node ", lista2.childNodes)
