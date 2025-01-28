//array 

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

dados[2]('Ford');
dados[1][2].cor; // azul

const carros = new Array('VW', 'Audi', 'BMW', 'Mercedes')
carros[4] = 'Ford'
carros[20] = 'Ferrari'
console.log(carros)
console.log(carros.length)


// Array from:
const listaLis = document.querySelectorAll('li')
const arrayLis = Array.from(listaLis)

const obj = {
  0: 'Camila',
  1: 'Zebedeu',
  2: 'João',
  length: 3,
}

const objArray = Array.from(obj)

// isArray*()

console.log(Array.isArray(listaLis))
console.log(Array.isArray(arrayLis))

//Array.of(), Array() e new Array()

Array.of(10); // [10]
Array.of(1,2,3,4); // [1,2,3,4]
new Array(5); // [,,,,]
Array(5); // [,,,,]
Array(1,2,3,4); // [1,2,3,4]

//length

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length //3 itens dentro do array de frutas
frutas[0].length // 6 letras de banana
frutas[1].length // 4 letras de pera
frutas[2].length // 2 itens dentro do array
frutas[2][0].length // 6 letras em uva rota de dentro do array

// mutator methods: retorna valor e altera array original
// não funciona para array de numbers

const instrumentos2 = ['Guitarra', 'Baixo', 'Violão', 'Amplificador', 'Microfone']
console.log(instrumentos2.sort());

const idades = [32,21,33,43,1,12,8];
console.log(idades.sort()) //não funciona -> [1, 12, 21, 32, 33, 43, 8]

//[].unshift() e [].push() -> retorna o length
const carros2 = ['Ford', 'Fiat', 'VW'];
carros2.unshift('Honda', 'Kia'); // 5
carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros2.push('Ferrari'); // 6
carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

//[].shift() e [].pop() -> retorna o array
const carros3 = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros3.shift(); // 'Ford'
carros3; // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros3.pop(); // 'Honda'
carros3; // ['Fiat', 'VW'];

//[].reverse() -> retorna nova array
const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford'];
