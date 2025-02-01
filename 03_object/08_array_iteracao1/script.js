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
const numerosX3 = numeros.map(n => n * 3)

numerosX3; // [6, 12, 18, 24, 30, 36, 42];
