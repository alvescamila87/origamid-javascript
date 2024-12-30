//boolean

var nome = ""; //valor falso

if(nome) {
    console.log(nome)
} else {
    console.log("Não existe nome")
}

//falsy

/* 

    if(false)
    if(0) // ou -0
    if(NaN)
    if(null)
    if(undefined)
    if('') // ou "" ou `` 

// todo o resto da truthy

*/

//truthy

/* 

    if(true)
    if(1) 
    if(' ')
    if('camila')
    if(-5)
    if({}) 

*/

// verificar se o valor é true or false, é uma forma de verificar se o valor da variável é true or false.

/*
    if(!!' ') // true
    if(!!'') // false
    if(!true) // false
    if(!1) // false
    if(!'') // true
    if(!undefined) // true
*/


//exercicio:

// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'

var minhaIdade = 37
var idadePai = 63

if(minhaIdade > idadePai) {
    console.log("É maior")
} else if (minhaIdade === idadePai) {
    console.log('É igual')
} else {
    console.log('É menor')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log("Resultado da expressão: ", expressao) // false
console.log(5 - ' ') //5
console.log(5 - 's') //NaN -> false

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //truthy
var idade = 28; //truthy
var possuiDoutorado = false; //falsy
var empregoFuturo; //falsy
var dinheiroNaConta = 0; //falsy

console.log("Truthy or falsy: ", !!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil >= china) {
    console.log("Brasil tem MAIS habitantes que a China")
} else {
    console.log("Brasil tem MENOS habitantes que a China")
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// Falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

// 'Cão'
