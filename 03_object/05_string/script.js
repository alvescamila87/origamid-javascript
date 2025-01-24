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

// exercicios

// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

  let taxaTotal = 0;
  let recebimentoTotal = 0;
  transacoes.forEach(transacao => {
    //console.log(transacao.descricao.slice(0, 4))
    //console.log(transacao.descricao.includes("Taxa"))
    const numeroLimpo = +transacao.valor.replace("R$ ", "");
    //console.log(numeroLimpo)
    if(transacao.descricao.slice(0,4) === "Taxa") {
        taxaTotal += numeroLimpo;
    } else if (transacao.descricao.slice(0,4) === "Rece") {     
        recebimentoTotal += numeroLimpo;
    }
        
  })
  console.log(taxaTotal)
  console.log(recebimentoTotal)

  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  let arrayListaTransportes = transportes.split(";")
  console.log(arrayListaTransportes)
  
  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

let htmlFormatado = html.split("span").join("a")
console.log(htmlFormatado)
  
  // Retorne o último caracter da frase
const frase10 = 'Melhor do ano!';
console.log("última letra: ", frase10[frase10.length -1])
console.log("última letra: ", frase10.slice(-1))
  
  // Retorne o total de taxas (quantos itens são taxas)
  const transacoes3 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

  let totalItens = 0;
  transacoes3.forEach(item => {
    //console.log(item.slice(0,3).toLowerCase())
    /**
     * ou assim:
     * item = item.toLowerCase();
     * item = item.trim();
     * item = item.slice(0,4);
     * 
     * if(item === "taxa") {
     * totalItens++}
     */

    if(item.toLowerCase().trimStart().trimEnd().slice(0,3) === "tax") {
        totalItens += 1;
    }
  })
  
  console.log("Total de itens: ", totalItens)
  
  