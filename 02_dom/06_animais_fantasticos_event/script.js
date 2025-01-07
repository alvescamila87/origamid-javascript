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
