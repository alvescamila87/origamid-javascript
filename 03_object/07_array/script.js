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

