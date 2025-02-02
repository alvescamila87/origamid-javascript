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
const tempoAulas2 = aulas.reduce((acumulador, item) => {
  return acumulador + item.min
})
console.log("Tempo 2: ", tempoAulas2)

const tempoAulas3 = aulas.reduce((acumulador, item) => {
  return acumulador + item.min
}, 0)
console.log("Tempo 3: ", tempoAulas3)

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

const arrayNomeAulas3 = aulas.map(nomeAulas2)

console.log(arrayNomeAulas3)

// Forma 4 - array de nomes de aula

const nomesAula3 = aula => aula.nome;

const arrayNomeAulas4 = aulas.map(nomesAula3)

console.log(arrayNomeAulas3)


const alunos = [
  {
    nome: 'Maria',
    idade: 15
  },
  {
    nome: 'João',
    idade: 10
  },
  {
    nome: 'Zebedeu',
    idade: 20
  },
  {
    nome: 'Madalena',
    idade: 25
  },
]

// Forma 1

function retornaNomeAluno1(aluno) {
  return aluno.nome
}

const imprimeListaAlunos1 = alunos.map(retornaNomeAluno1)
console.log(imprimeListaAlunos1)

// Forma 2

const imprimeListaAlunos2 = alunos.map(function(aluno) {
  return aluno.nome
})
console.log(imprimeListaAlunos2)

// Forma 3

const retornaNomeAluno3 = aluno => aluno.nome
const imprimeListaAlunos3 = alunos.map(retornaNomeAluno3)
console.log(imprimeListaAlunos3)

// Forma 4 

const retornaNomeAluno4 = function(aluno) {
  return aluno.nome
}

const imprimeListaAlunos4 = alunos.map(retornaNomeAluno4)
console.log(imprimeListaAlunos4)


// [].reduce() => retorna undefined
// callback(acumulador, item, index, array)
// valorInicial: 0

const horaAula = [10, 25, 30]
const totalHoraAula1 = horaAula.reduce((acumulador, item, index, array) => {
  //console.log(acumulador, item, index, array)
  console.log(acumulador, item, index)
  return acumulador + item
}, 0)

/* como acontece o processo:

const aulas = [10, 25, 30];

// 1
aulas.reduce((0, 10) => {
  return 0 + 10;
}, 0); // retorna 10

// 2
aulas.reduce((10, 25) => {
  return 10 + 25;
}, 0); // retorna 35

// 3
aulas.reduce((35, 30) => {
  return 35 + 30;
}, 0); // retorna 65
*/

const listaNumeros = [2, 50, 100, 999, 25, 13, 10, 11, 70, 29, 14, 20]

const maiorNumero = listaNumeros.reduce((valorAnterior, valorAtual) => {
  //if(valorAnterior > valorAtual) return valorAnterior;
  //return valorAtual;

  return valorAnterior > valorAtual ? valorAnterior : valorAtual
  
}, 0)

console.log(maiorNumero)

// usar o reduce para lista o array com o nome das aulas

const aulas2 = [
  {
    nome: 'HTML',
    min: 15
  },
  {
    nome: 'Java',
    min: 10
  },
  {
    nome: 'Python',
    min: 20
  },
  {
    nome: 'JS',
    min: 25
  },
]

const listaAulas2 = aulas2.reduce((acumulador, item, index) => {
  acumulador[index] = item.nome
  return acumulador;
}, {}) // no lugar do zero, colocar um objeto vazio

console.log(listaAulas2)