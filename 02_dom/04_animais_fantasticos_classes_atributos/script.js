// classes e atributos: como manipulá-los:

// classes
const menu = document.querySelector('.menu')
console.log("Menu: ", menu)

// classList
console.log(menu.classList[1])

// classList add
menu.classList.add('ativo', 'teste')

// classList remove
menu.classList.remove('principal')

// classList toggle (incluir habilitando ou desabilitando essa descricao da class)
menu.classList.toggle('azul')

if(menu.classList.contains('azul')) {
    menu.classList.add('possui-azul')
} else {
    menu.classList.add('nao-possui-azul')
}

// className: retorna string com o nome da classe
menu.className += " vermelho"
console.log(menu.className)

// atributtes
const animais = document.querySelector('.animais')
console.log(animais)

console.log(animais.attributes)
console.log(animais.attributes[1])
console.log(animais.attribute)

// getAttribute and setAttribute

const primeiraImagem = document.querySelector('img')
console.log(primeiraImagem)

// pegar atributos
console.log(primeiraImagem.getAttribute('src'))
console.log(primeiraImagem.getAttribute('alt'))

// adicionar atritbutos
primeiraImagem.setAttribute('alt', 'É uma raposa')
console.log(primeiraImagem.getAttribute('alt'))

// verifica se tem atritbuto: verificar se todas as imagens possui texto alternativo
const possuiAlt = primeiraImagem.hasAttribute('alt')
console.log(possuiAlt)

//exercicios:

// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a')
console.log(itensMenu)

itensMenu.forEach((item) => {
    item.classList.add('ativo')
})


// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach(item => item.classList.remove('ativo'))

itensMenu[0].classList.add('ativo')


// Verifique se as imagens possuem o atributo alt
const imagens = document.querySelectorAll('img')

// imagens.forEach((item, index) => {
//     console.log(item[index].hasAttribute('alt'))
// })

imagens.forEach((item) => {
    const possuiAtributo = item.hasAttribute('alt')
    console.log(item, possuiAtributo)
})
console.log(imagens)


// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="http"')
linkExterno.setAttribute('href', 'www.github.com/alvescamila87')
console.log(linkExterno)



