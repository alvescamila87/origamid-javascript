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

