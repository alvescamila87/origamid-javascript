// events

const img = document.querySelector('img');

// elemento.addEventListener(event, callback, options)
img.addEventListener('click', function() {
  console.log('Clicou');
})

// callback
const img2 = document.querySelector('img');
function callback() {
  console.log('Clicou');
}

img2.addEventListener('click', callback); // 🚀
img2.addEventListener('click', callback()); // undefined
img2.addEventListener('click', function() {
  console.log('Clicou');
})
img2.addEventListener('click', () => {
  console.log('Clicou');
})

// event: propriedades: e ou event

const img3 = document.querySelector('img')

function mostrarClique(e) {
  console.log(e)
}

img3.addEventListener('click', mostrarClique)

// event demais propriedades do event

const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this // referente ao item que selecionei
  const target = event.target; // onde o clique ocorreu // onde clicou exatamente
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);

// meu exemplo
const animaisLista2 = document.querySelector('.animais-lista')

function callbackLista(e) {
  console.log("Current target", e.currentTarget)
  console.log("Target", e.target)
  console.log("Type of event", e.type)
  console.log("Path", e.path)
}

animaisLista2.addEventListener('click', callbackLista)

console.log(animaisLista2)

// event.preventDefault()

const linkExterno = document.querySelector('a[href^="http"]')

function handleLinkExterno(e) {
  e.preventDefault() // não redireciona para o site, por exemplo
  console.log('Clicou', e)
}

linkExterno.addEventListener('click', handleLinkExterno)


// this element x this object

const linkExterno2 = document.querySelector('a[href^="http"]')

function handleLinkExterno(e) {
  e.preventDefault()
  console.log('This', this) // é a mesma coisa que current.target
  console.log('Current target', e.currentTarget) // é a mesma coisa que this
  console.log('href do link', this.getAttribute('href')) 
}

linkExterno2.addEventListener('click', handleLinkExterno)

// diferentes eventos
const h1 = document.querySelector('h1')

function mostrarEvento(e) {
  console.log("Tipo: ", e.type, e)
}

h1.addEventListener('click', mostrarEvento)
h1.addEventListener('mouseenter', mostrarEvento)
h1.addEventListener('mousemove', mostrarEvento)
window.addEventListener('scroll', mostrarEvento)
window.addEventListener('resize', mostrarEvento)
window.addEventListener('keydown', mostrarEvento)
window.addEventListener('keyup', mostrarEvento)

//keyboard

function keyboard(e) {
  console.log("KEY: ", e.key)
  if(e.keyboard === 'f') {
    document.body.classList.toggle('fullscreen')
  }
}

window.addEventListener('keydown', keyboard)

// for each em eventos

const imgs = document.querySelectorAll('img')

function mostrarMensagem(e) {
  console.log('Imagem: ', e.target.getAttribute('src'), ' adicionada ao elemento.')
}

imgs.forEach(item => {
  item.addEventListener('click', mostrarMensagem)
})

// exercicios

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"')
console.log("Links internos: ", linksInternos)

function handleClickParaAtivar(e) { 
  e.preventDefault()   
  linksInternos.forEach(link => {
    link.classList.remove('ativo')
  })
  e.currentTarget.classList.add(`ativo`)

}

linksInternos.forEach(item => {
  console.log("Item de link interno", item)
  item.addEventListener('click', handleClickParaAtivar)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const elementos = document.querySelectorAll('*')
console.log("Elementos: ", elementos)

function mostrarElemento(e) {
  console.log("Elemento clicado: ", e.target, e.currentTarget)
}

elementos.forEach(elemento => {
  elemento.addEventListener('click', mostrarElemento)
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function removeClasse(e) {
  console.log("Remove: ", e.target.remove())
}

elementos.forEach(item => {
  item.addEventListener('click', removeClasse)
})


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function aumentarFonte(e) {
  console.log("key: ", e.key)
  if(e.key === 't') {
    document.documentElement.classList.toggle('html.textomaior')    
  }
}

elementos.forEach(item => {
  item.addEventListener('keydown', aumentarFonte)
})
