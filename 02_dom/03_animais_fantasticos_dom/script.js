const animais = document.getElementById('animais');
console.log("id", animais)

const gridSection = document.getElementsByClassName('grid-section')
console.log("class", gridSection)

const contato = document.getElementsByClassName('grid-section contato')
console.log('contato', contato)

const ul = document.getElementsByTagName('ul')
console.log('tag ul', ul[2])

const primeiraLi = document.querySelector('li')
console.log("LI", primeiraLi)

const primeiraUl = document.querySelector('ul')
console.log("Ul", primeiraUl)

const linkInterno = document.querySelector('[href^="#"]')
console.log("Links: ", linkInterno)

const animaisImg = document.querySelectorAll('.animais img')
console.log("img: ", animaisImg)

// exercicios

// Retorne no console todas as imagens do site
const imagensWebsite = document.querySelectorAll('img')
console.log("Imagens do site: ", imagensWebsite)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgWebsite = document.querySelectorAll('img[src^="img/imagem"')
console.log("Retornar só as imagens: ", imgWebsite)

// Selecione todos os links internos (onde o href começa com #)
const hrefsHashtag = document.querySelectorAll('a[href^="#"')
console.log("Todos # : ", hrefsHashtag)

// Selecione o primeiro h2 dentro de .animais-descricao
const h2Epecifico = document.querySelector('.animais-descricao h2')
console.log("H2: ", h2Epecifico)

// Selecione o último p do site
const ultimoParagrafo = document.querySelector('footer p')
console.log("último p: ", ultimoParagrafo)

// ou
const paragrafos = document.querySelectorAll('p')
console.log('último p2: ', paragrafos[paragrafos.length -1])


// for each and arrow function

paragrafos.forEach(function(item, index, array) {
    console.log("Item for each", item, index, array)
})

// array like - htmlCollection
const titulos = document.getElementsByClassName('titulo') // html collection
const titulosArray = Array.from(titulos) // transforma em array para poder acessar o método forEach

titulosArray.forEach(function(item) {
    console.log("Array like: ", item)
})

// arrow function: encurtamento de function expression
paragrafos.forEach(item => {
    console.log("arrow function: ", item)
})

let i = 0;
paragrafos.forEach(() => {
    i < 10 ? i++ : "Acabou"
    console.log("i: ", i)
})

// versões curtas:
paragrafos.forEach(() => console.log(i))
paragrafos.forEach(function() {console.log(i++)})

// exercicios:

// Mostre no console cada parágrado do site
paragrafos.forEach((item, index) => console.log("Parágrafo ", index, " -> ", item))

// Mostre o texto dos parágrafos no console
paragrafos.forEach(item => console.log("Textos de paragrafos: ", item.innerText))

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let y = 0;
imgs.forEach(()=> {
  console.log(y++);
});

imgs.forEach(() => y++);
