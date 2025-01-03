// dom
//window.alert("Isso mesmo")

const href = window.location.href;

console.log("href", href)

// selecionar tag no html
const h1Selecionado = document.querySelector('h1')

//classList
const h1Classes = h1Selecionado.classList
const h1Classe1 = h1Selecionado.classList[1]

// callback

function callbackH1() {
    console.log('Clicou em: ', h1Selecionado)
}

// h1Selecionado.addEventListener('click', function() {
//     console.log('Clicou em: ', h1Selecionado)  
// })

h1Selecionado.addEventListener('click', callbackH1);

// exercicio

// Retorne o url da página atual utilizando o objeto window

//const url = location.href
const url = window.location.href
console.log('URL com href: ', url)

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector('.ativo')
console.log('Elemento ativo: ', elementoAtivo)

// Retorne a linguagem do navegador
const idioma = window.navigator.language
console.log('Idioma navegador: ', idioma)

// Retorne a largura da janela 
const larguraPagina = window.innerWidth
console.log('Altura do elemento: ', larguraPagina, "px")
