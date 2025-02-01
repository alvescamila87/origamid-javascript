// array e iteração

// [].forEach() => retorna undefined
const carros = ['VW', 'BMW', 'Mercedes', 'Audi']

carros.forEach((item, index, array) => {
  //array[index] = 'Teste';  //irá mudar a array original
  console.log(item, index, array)
})

const li = document.querySelectorAll('li')

const retornoForEach = li.forEach(i => i.classList.add('ativa'))
console.log(retornoForEach)


// [].map() => retorna array

const carros1 = ['VW', 'BMW', 'Mercedes', 'Audi']

const novaArray = carros1.map((item, index, array) => {
  console.log(item)
  // retorna array com undefined caso não passar return
  return item.toUpperCase();
})

console.log(novaArray)

const numeros = [2, 4, 6, 8, 10, 12, 14];
const numerosX3 = numeros.map(n => n * 3) // se fosse forEach, sairia undefined

numerosX3; // [6, 12, 18, 24, 30, 36, 42];

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const tempoAulas = aulas.map(aula => aula.min)
console.log(tempoAulas)

// para somar é o reduce
// soma começa em 0 (valor inicial passado como segundo argumento do .reduce()).
const tempoAulas2 = aulas.reduce((soma, aula) => soma += aula.min, 0)
console.log(tempoAulas2)

// Forma 1 - array de nomes de aula

function nomeAulas(aula) {
  return aula.nome
}

const arrayNomeAulas = aulas.map(nomeAulas)

console.log(arrayNomeAulas)

// Forma 2 - array de nomes de aula

const arrayNomeAulas2 = aulas.map(function(aula) {
  return aula.nome;
})

console.log(arrayNomeAulas2)

// Forma 3 - array de nomes de aula

const nomeAulas2 = function(aula) { // obrigatoriamente aulas precisa ser um objeto
  return aula.nome 
}

// Forma 4 - array de nomes de aula

const nomesAula3 = aula => aula.nome;


