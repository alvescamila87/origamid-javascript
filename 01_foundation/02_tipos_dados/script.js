//tipos de dados

var nome = 'Camila'
var idade = 36
var time; //undefined
var time = null; //objeto
var simbolo = Symbol()

console.log(simbolo)
console.log(typeof simbolo)

// soma strings

var sobrenome = "Abraão"
var nomeCompleto = nome + " " + sobrenome
console.log(nomeCompleto)
var nomeCompleto2 = `${nome} ${sobrenome}`
console.log(nomeCompleto2)
console.log(typeof nomeCompleto2)

// number

var ano = "2024"
var mes = 8
console.log(ano + mes)

// back slash

var frase = "Esse é o \"melhor\" jogo!"
console.log(frase)

var frase2 = "It\'s time! " + ano
console.log(frase2)

console.log(typeof frase2)

// hoisting
console.log(idade2) //undefined
var idade2 = 13