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

// manipulação

const lista3 = document.querySelector('.animais-lista');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

contato.appendChild(lista3); // move lista para o final de contato
contato.insertBefore(lista3, titulo); // insere a lista antes de titulo
contato.removeChild(titulo); // remove titulo de contato
//contato.replaceChild(lista3, titulo); // substitui titulo por lista

// criação de elementos

const mapa = document.querySelector('.mapa')

const novoH1 = document.createElement('h1');
novoH1.innerHTML = "Fantastic animals"
novoH1.classList.add('titulo2')

mapa.appendChild(novoH1)

console.log("Novo h1: ", novoH1)

// clonar de elementos

const titulo1 = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo1;
// titulo, titulo2 e novoTitulo são iguais

const cloneTitulo = titulo.cloneNode(true);
const contato2 = document.querySelector('.contato');
contato.appendChild(cloneTitulo);

// clonar de elementos

const outroh1 = document.querySelector('h1')
const faq = document.querySelector('.faq')

const cloneH1 = outroh1.cloneNode(true)

// mover h1
faq.appendChild(outroh1)

// clonar h1
faq.appendChild(cloneH1)

// exercicios

// Duplique o menu e adicione ele em copy
const menu2 = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const cloneMenu = menu2.cloneNode(true)

copy.appendChild(cloneMenu)

// Selecione o primeiro DT da dl de Faq
const faq3 = document.querySelector('.faq')
const primeiroDt = faq3.querySelector('dt')

// Selecione o DD referente ao primeiro DT
const primeiroDd = primeiroDt.nextElementSibling;

primeiroDd.remove();

console.log(primeiroDd)

// Substitua o conteúdo html de .faq pelo de .animais
const animais4 = document.querySelector('.animais')
const faq4 = document.querySelector('.faq')

faq4.innerHTML = animais4.innerHTML
