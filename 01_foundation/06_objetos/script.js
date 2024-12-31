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