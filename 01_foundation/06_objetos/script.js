//objetos

var pessoa = {
    nome: "Camila",
    idade: 37,
    profissao: "Developer",
    possuiFaculdade: true,
}

console.log(pessoa)
console.log(pessoa.nome)
pessoa.nome

console.log(typeof pessoa)

//métodos

let quadrado = {
    lados: 4,
    nome: "Camila",
    area: function(lado){
        return lado * lado
    },
    perimetro: function(lado) {
        return this.lados * lado
    },
    imprimirNome: function() {
        //console.log("O nome é: ", this.nome)
        return this.nome
    }
}

console.log(quadrado.area(4))
console.log(quadrado.perimetro(5))
console.log(quadrado.imprimirNome())

// Math

console.log(Math.random())

// objetos 2

var menu = {
    width: 900,
    height: 50,
    backgroundColor: '#84E'
}

// dot notation get: acessar valores
console.log(menu.backgroundColor)

// dot notation set: alterar valores
var bg = menu.backgroundColor
console.log(bg)

//setar valores
menu.backgroundColor = "#000"

console.log(menu.backgroundColor)

// adicionar novas propriedades
menu.color = "Blue"
console.log(menu.color)

// adicionar funções 

menu.esconder = function() {
    console.log('Escondi')
}

console.log(menu.esconder())

//this
var height = 100;
var menu2 = {
    width: 900,
    height: 50,
    backgroundColor: '#84E',
    metadeHeight: () => {
        return this.height / 2 // divisão do height propriedade
        // return height / 2 // divisão do height de fora do objeto
    }
}

// exercício 2:

// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var pai = {
    nome: 'Paulo',
    sobrenome: 'Alves',
    idade: 63,
    possuirMBA: true,
    quantidadeMBA: 2,
}

// Crie um método no objeto anterior, que mostre o seu nome completo

pai.exibirNomeCompleto = function() {
    //console.log(pai.nome + " " + pai.sobrenome)
    return `${this.nome} ${this.sobrenome}`
}


// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
}

carro.preco = 3000;
  
  // Crie um objeto de um cachorro que represente um labrador,
  // preto com 10 anos, que late ao ver um homem

  var cachorro = {
    raca: 'labrador',
    cor: 'preto',    
    idade: 10,
    latir(pessoa) {
        if(pessoa === 'homem') {
            return 'late: au au'
        } else {
            return 'cão amigo'
        }
        //console.log('Au au')
    }
  }
  
  // tudo é objeto
  var nome = 'Camila'
  var novoNome = nome.replace('amila', 'atarina')
  console.log(nome)
  console.log(novoNome)

  nome.length
  nome.charAt(3)
  var nomeMinusculo = nome.toLowerCase()
  console.log(nomeMinusculo)

// DOM

var botao = document.querySelector('.btn')


// exercícios 3:
 
// nomeie 3 propriedades ou métodos de strings
var passaro = 'Papagaio'
console.log(passaro.charAt(3))

var passaroMinusculo = passaro.toLowerCase()
console.log(passaroMinusculo)

console.log(passaro.length)
console.log("SLICE: ", passaro.slice(0-3))

// nomeie 5 propriedades ou métodos de elementos do DOM
// botao.addEventListener
// botao.innerHTML
// botao.id
// botao.appendChild
// botao.outerHTML

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V