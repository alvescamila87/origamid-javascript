// number and math

console.log(Number.isNaN(NaN)) // false
console.log(Number.isNaN(5)) // false
console.log(Number.isInteger(13)) // true
console.log(Number.isInteger(13.9)) // false

//parseFloat and parseInt
console.log(parseFloat(' 615651.65'))
console.log(parseFloat('615651.65'))
console.log("virgula", parseFloat('615651,65'))
console.log(parseFloat('$615651.65'))
console.log(parseFloat('615651.65 reais'))
console.log(parseInt('100.20'))
console.log(parseInt(' 100.20'))
console.log(parseInt('$100.20'))
console.log(parseInt('100.20 reais'))

const valorString = "999.69"
console.log("Forma 1 - Converter string para number:", parseInt(valorString))
console.log("Forma 2 - Converter string para number:", parseFloat(valorString))
console.log("Forma 3 - Converter string para number:", valorString * 1)

//toFixed (retorna string, não number)
const preco1 = 2.99
console.log(preco1.toFixed())

const carro = 75.455
console.log(carro.toFixed(2))

const preco2 = 1499.49
console.log(preco2.toFixed(1))
console.log(+preco2.toFixed(1) + 3625) // retorna string, por isso precisa transformar em number
console.log((100.9658).toFixed(1))

//toString()
const valor = 10.62
console.log(valor) //number
console.log("Forma 1 - Converter number em string:", valor.toString()) //transforma em string

// de string para number é usando parseFloat

// colocar cifrão

let valor3 = 48.49
valor3 = valor3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
console.log(valor3)

// math

// Math.abs(-5.5); // 5.5
// Math.ceil(4.8334); // 5
// Math.ceil(4.3); // 5
// Math.floor(4.8334); // 4
// Math.floor(4.3); // 4
// Math.round(4.8334); // 5
// Math.round(4.3); // 4


// const aleatorio = Math.floor(Math.random() * 100);
// console.log(aleatorio)

// Math.max(5,3,10,42,2); // 42
// Math.min(5,3,10,42,2); // 2

// Math.random(); // 0.XXX
// Math.floor(Math.random() * 100); // entre 0 e 100
// Math.floor(Math.random() * 500);  // entre 0 e 500

// // Número random entre 72 e 32
// Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
// Math.floor(Math.random() * (max - min + 1)) + min;

// Retorne um número aleatório
// entre 1050 e 2000
const aleatorio2 = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(aleatorio2)


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(", ")
console.log("Numeros: ", arrayNumeros)
const maxNumber = Math.max(...arrayNumeros); //Math.max(arrayNumeros[0], arrayNumeros[1], ... );
console.log("Maior número do array: ", maxNumber)


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];


function limparPrecos(preco) {
  preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
  preco = +preco.toFixed(2)
  console.log("Preco da lista: ", preco)

  return preco;  
}

let somaTotal = 0;
listaPrecos.forEach(item => {
  //console.log("Lista preco 1:", somaTotal += item)
  somaTotal += limparPrecos(item)
})

console.log("Total da soma: ", somaTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}));

limparPrecos(listaPrecos[1]);

const listaPrecos2 = ['R$ 129,782', ' R$ 24861,611',
  'R$ 6587  ', 'r$  741,35', 'r$  625,35'];

  function limpaPrecos2(preco) {
    preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
    preco = +preco.toFixed(2)
    //console.log("Lista preco 2: ", preco )
    
    return preco;
  }
  
let somaTotal2 = 0;
listaPrecos2.forEach(precoDaLista2 => console.log(somaTotal2 += limpaPrecos2(precoDaLista2)))

console.log("Soma 2: ", somaTotal2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}))

limpaPrecos2(listaPrecos2[0])