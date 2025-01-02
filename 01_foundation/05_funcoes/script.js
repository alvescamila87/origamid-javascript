// functions

function areaQuadrado(lado) {
    return lado * lado
}

console.log("Área do quadrado: ", areaQuadrado(3),  "m²");

function pi() {
    return 3.15;
}

console.log(5 * pi())

function imc(peso, altura) {
    const imc = peso / (altura ** 2)
    return imc
}

console.log(imc(52, 1.63));


// function click
addEventListener('click', function() {
    console.log('clicked!')
})

//ou dessa forma:

function mostraConsole() {
    console.log('Clicou')
}

addEventListener('click', mostraConsole)

// funcão sem retorno
function imc2(peso, altura) {
    const imc = peso / (altura ** 2)
    console.log(imc);
}

imc2(20, 1.20) //undefined
console.log(imc2(20, 1.20)) // retorna o imc e o undefined

function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
        return 'Informe a idade em número'
    } else if (idade >= 60) {        
        console.log("Terceira idade")
        return true
    } else {
        console.log("Não é idoso")
        return false
    }
}

console.log(terceiraIdade("oi"))

// exercício:

// Crie uma função para verificar se um valor é Truthy
function checaVerdadeiro(valor) {
    if(!!valor) {
        console.log("truthy")
        return true
    } else {
        console.log("falsy")
        return false
    }
}

console.log(checaVerdadeiro(null))

function isTruthy(dado) {
    return !!dado
}

console.log("Is truthy? ", isTruthy(0))


// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado) {
    return (lado + lado) * 2
}

console.log("Perímetro: ", perimetroQuadrado(2))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
    return nome + " " + sobrenome
}

console.log(nomeCompleto("Maria", "Madalena"))

// Crie uma função que verifica se um número é par
function verificarPar(numero) {
    if(numero % 2 === 0) {
        console.log('par')
        return true        
    } else {
        console.log("ímpar")
        return false
    }
}

console.log(verificarPar(13))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function checaTipoDeDado(valor) {
    return typeof valor
}

console.log(checaTipoDeDado(36))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', () => {
    console.log('Camila Alves')
})

// Corrija o erro abaixo

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    //var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  //jaVisitei(20);

