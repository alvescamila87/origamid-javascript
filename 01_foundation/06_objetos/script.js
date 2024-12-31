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