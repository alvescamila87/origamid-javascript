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