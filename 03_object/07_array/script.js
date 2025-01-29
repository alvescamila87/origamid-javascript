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

//desestruturar array
//forma 1
const arrayItensDiferentes = [{nome: 'Camila', idade: 37}, {marca:'VW', modelo: 'Fusca'}]
const [pessoa, carro] = arrayItensDiferentes;
pessoa.nome;
pessoa.nomidade;
carro.marca;
carro.modelo;

//forma 2
const arrayItensIguais = [{nome: 'Camila', idade: 37}, {nome: 'Zebedeu', idade: 20}, {nome: 'Madalena', idade: 18}]
const [pessoa1, pessoa2, pessoa3] = arrayItensIguais;
pessoa1.nome;
pessoa1.idade;
pessoa2.nome;
pessoa2.idade;
pessoa3.nome;
pessoa3.idade;

//forma 3
const arrayItensIguais2 = [{nome: 'Camila', idade: 37}, {nome: 'Zebedeu', idade: 20}, {nome: 'Madalena', idade: 18}]
const [pessoaLista1, ...a] = arrayItensIguais2;
pessoaLista1.nome;
pessoaLista1.idade
console.log(a.nome, a.idade);

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

// mutator methods: 
// métodos modificadores: [].sort() - MODIFICA ARRAY ORIGINAL
// não funciona para array de numbers

const instrumentos2 = ['Guitarra', 'Baixo', 'Violão', 'Amplificador', 'Microfone']
console.log(instrumentos2.sort());

const idades = [32,21,33,43,1,12,8];
console.log(idades.sort()) //não funciona -> [1, 12, 21, 32, 33, 43, 8]

//[].unshift() e [].push() - MODIFICA ARRAY ORIGINAL
//[].unshift() adiciona elementos ao início da array e retorna o length da mesma. 
//[].push() adiciona elementos ao final da array e retorna o length da mesma.
const carros2 = ['Ford', 'Fiat', 'VW'];
carros2.unshift('Honda', 'Kia'); // 5
carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros2.push('Ferrari'); // 6
carros2; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];

//[].shift() e [].pop() - MODIFICA ARRAY ORIGINAL
//[].shift():  remove o primeiro elemento da array e retorna o mesmo.
//[].pop() remove o último elemento da array e retorna o mesmo.
const carros3 = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros3.shift(); // 'Ford'
carros3; // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros3.pop(); // 'Honda'
carros3; // ['Fiat', 'VW'];

//[].reverse() -> retorna nova array - MODIFICA ARRAY ORIGINAL
const carros5 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros5.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford'];

//[].splice() - MODIFICA ARRAY ORIGINAL
const carros6 = ['Ford', 'Fiat', 'VW', 'Honda']; 
carros6.splice(1, 0, 'Kia', 'Mustang'); // []
carros6; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros6.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW']
carros6; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']

//[].copyWithin() - MODIFICA ARRAY ORIGINAL
['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', 'Item2']

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']

//métodos de Acesso [].concat() - NÃO modifica array original

const transportes1 = ['Barco', 'Aviao'];
const transportes2 = ['Carro', 'Moto'];
const transportes = transportes1.concat(transportes2);
console.log(transportes)

const transportes4 = [].concat(transportes1, transportes2, 'Van')
console.log(transportes4)
transportes4.concat(transportes1, transportes2, '1478', 'dsffsdfs')
console.log(transportes4)

//[].includes(), [].indexOf() e [].lastIndexOf()- NÃO modifica array original
const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];
console.log(linguagens.includes('java'))
console.log(linguagens.includes(`python`))
console.log(linguagens.indexOf(`js`))
console.log(linguagens.lastIndexOf(`js`))

//[].join() - NÃO modifica array original
const linguagens2 = ['html', 'css', 'js', 'php', 'python'];
linguagens2.join(); // 'html,css,js,php,python'
linguagens2.join(' '); // 'html css js php python'
linguagens2.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2');
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join('h1');
// <h1>Título Principal</h1>


//[].slice() - NÃO modifica array original
const linguagens4 = ['html', 'css', 'js', 'php', 'python'];
linguagens4.slice(3); // ['php', 'python']
linguagens4.slice(1, 4); // ['css', 'js', 'php']

const clonelinguagens4 = linguagens4.slice();
console.log(linguagens4.pop())
console.log(linguagens4)  //['html', 'css', 'js', 'php']
console.log(clonelinguagens4) // ['html', 'css', 'js', 'php', 'python']

// exercicios:

const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const comidas2 = comidas.shift();
console.log(comidas) // ['Frango', 'Carne', 'Macarrão']
console.log(comidas2) // 'Pizza'

// Remova o último valor de comidas e coloque em uma variável
const comidas3 = comidas.pop();
console.log(comidas) // ['Frango', 'Carne']
console.log(comidas3) // 'Macarrão'

// Adicione 'Arroz' ao final da array
comidas.push('Arroz')

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift('Peixe', 'Batata')

const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join

const carros7 = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável
