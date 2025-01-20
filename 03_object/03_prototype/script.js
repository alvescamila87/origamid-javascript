// prototype

function Pessoa(nome) {
    this.nome = nome;
    this.abracar = function() {
        return 'Abraçou!'
    }
    this.andar = function() {
        return 'Andou pelo objeto'
    }
}

console.log(Pessoa.prototype) // tem prototype pois é uma função

// adicionar props

Pessoa.prototype.andar = function andar() {
    console.log("Andou!")
    return this.nome + " Pessoa andou"
}

console.log(Pessoa.prototype)


const camila = new Pessoa("Camila")
console.log(camila.prototype) // é um objeto e não uma função

// Acessam o mesmo método
// mas __proto__ não terá
// acesso ao this.nome
camila.andar();
camila.__proto__.andar();


// Construtor nativo

const pais = "Brasil"
console.log(pais.length)

const cidade = new String(`Blumenau`);
console.log(cidade)

// métodos de array
const listaAnimais = ['cachorro', 'gato', 'cavalo']

const lista = document.querySelectorAll('li') //nodelist 

const listaArray = Array.prototype.slice.call(lista) // transformar em array
const listaArray2 = Array.from(lista) // transformar em array - forma 2

// ENTENDER O QUE RETORNA

const carro = {
    marca: "Volkswagen",
    pneus: 4,
    andar: function() {
        return true;
    },
    estacionar: function() {
        return 'Stopped!'
    }
}

console.log(carro.marca.toUpperCase()) // retorno string, acessa métodos percententes ao string
console.log(carro.pneus.toFixed()) // retorno number, acessa métodos percententes ao number
console.log(carro.andar()) // retorno booleano, nesse caso, então, acessa métodos percententes ao boolean


console.log(carro.andar.constructor) // Function()
console.log(carro.andar.constructor.name) // function
console.log(carro.andar().constructor.name) // boolean

//exercicios

// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa2(nome, sobrenome, idade) {
    this.nome = nome,
    this.sobrenome = sobrenome,
    this.idade = idade
    this.imprimir = function() {
        return 'Pessoa com Nome completo: ' + this.nome + " " + this.sobrenome
    }
}

const paulo = new Pessoa2('Paulo', 'Alves', 63)
console.log(paulo)
console.log(paulo.imprimir())
Pessoa2.prototype.imprimirCompleto = function() {
    return this.nome + " " + this.sobrenome + " com: " + this.idade + " anos de idade"
}

console.log(paulo.imprimirCompleto())


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// Nodelist.prototype
// HTMLCollection.prototype

// Object.getOwnPropertyNames(Nodelist.prototype)
// Object.getOwnPropertyNames(HTMLCollection.prototype)
// Object.getOwnPropertyNames(Document.prototype)


// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLElement
li.click; //Function
li.innerText; // String
li.value; //Number
li.hidden; //Boolean
li.offsetLeft; //Number
li.click(); //undefined (não retorna nada)


console.log("Teste: ", li.constructor.name)
li.clientHeight

li.constructor.name
li.click.constructor.name
li.innerText.constructor.name
li.value.constructor.name
li.hidden.constructor.name
li.offsetLeft.constructor.name


// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String
const teste = li.hidden.constructor.name
console.log(teste) // boolean
teste.constructor.name //String 