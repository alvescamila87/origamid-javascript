console.log("oi")

var nome = "Camila"
var idade = 37
var possuiFaculdade = true
console.log(nome, idade, possuiFaculdade);

var sobrenome = "Abraão", 
    cidade = "Blumenau",
    pais = "Brasil"

console.log(sobrenome, cidade, pais)

var semDefinir
console.log(semDefinir)

//hoisting
var comida;
console.log("HOISTING 1: ", comida);
var comida = "pizza"
console.log("HOISTING 2: ", comida)

/*
-> hoisting - como se tivesse feito isso
var comida;
console.log(comida);
comida = "pizza"
console.log(comida);
*/

//exercício

var comidaFavorita;
comidaFavorita = "churrasco"
console.log(comidaFavorita)

var jogo, estudo, disciplina, televisao, artista;
