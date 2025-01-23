// string
const comida = "Pizza";
const liquido = new String("Água");

console.log(comida.toUpperCase())
console.log(liquido.toUpperCase())

// concat
const frase = "Opa "
const linguagem = "Java"
const fraseFinal = frase + linguagem
console.log(fraseFinal.concat('!!', ' Whats up, man?'))

//includes(search, position)
const fruta = 'Banana'
const listaFrutas = 'Melancia, Banana, Maça'

console.log("Tem maça na lista: ", listaFrutas.includes('Maça'));
console.log("Tem melão na lista: ", listaFrutas.includes('Maça'));
console.log("Tem uva na lista: ", listaFrutas.includes('Uva'));

console.log("Fruta tem a string toda da lista: ", fruta.includes(listaFrutas))
console.log("Lista tem a string de fruta: ", listaFrutas.includes(fruta))
console.log("Tem: ", listaFrutas.includes(fruta, 5))

//startsWith and endsWith
console.log(fruta.startsWith('Ba'))
console.log(fruta.endsWith('d'))

//slice
const transacao = "Depósito do cliente"
console.log(transacao.slice(0, 7)) //pega no entre
console.log(transacao.slice(5)) // corta os primeiros caracteres e pega os demais, a partir do 5 index.

//indexOf ou lastIndexOf
console.log("Qual posição de 'N': ", fruta.indexOf('n'))
console.log("Qual posição de '2º N': ", fruta.lastIndexOf('n'))

//padStart
const preco = 'R$ 99,99'
console.log(preco.padStart(20, '....'))
console.log(preco.padEnd(20, 'bbb'))

const listaPrecos = ['R$ 99', 'R$ 999', 'R$ 9999', ]

listaPrecos.forEach(preco => {
    console.log(preco.padStart(10, '-'))
})

//repeat
const ta = "ta"
console.log(ta.repeat(5))

//replace
let listaItens = "Celular Phone Carregador Suporte"
listaItens = listaItens.replace("Celular", "Smartphone")
//listaItens = listaItens.replace(" ", ", ")
listaItens = listaItens.replace(/[ ]+/g, ", ")
console.log(listaItens)

//split
const arrayLista = listaItens.split(", ")
console.log(arrayLista)

const listaItens2 = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens2.split(' ');

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div'); // quebra exatamente na palavra
//console.log(htmlText)
console.log(htmlArray)

const htmlNovo = htmlArray.join('section');
console.log(htmlNovo)

//upper lower
const sexo1 = 'Feminino'
const sexo2 = 'feminino'
const sexo3 = 'FEMININO'

console.log(sexo1.toUpperCase() === 'FEMININO')

//trim trimStart trimEnd
const valor = ' R$ 25.00 '
console.log(valor.trim())    
console.log(valor.trimStart())    
console.log(valor.trimEnd())    

