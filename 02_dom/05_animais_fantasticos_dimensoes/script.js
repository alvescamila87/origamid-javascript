// width and height: dimensoes dos elementos

const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

const section1 = document.querySelector('.animais');

// Distância entre o topo do elemento e o topo da página
section1.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section1.offsetLeft;

const section2 = document.querySelector('.animais');

const rect = section2.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}

const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}
