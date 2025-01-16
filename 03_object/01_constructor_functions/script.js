//construction functions

const carro = {
    marca: "VW",
    preco: 0
}

const honda = carro
honda.marca = "Honda";
honda.preco = 75000;

const vw = carro
vw.marca = "volks"
vw.preco = 35000

// criar objeto

function Carro() {
    this.marca = "BWM";
    this.modelo = "320 M3";
    console.log(this)
}

const bmw = new Carro(); // cria objeto 1
const fiat = new Carro(); // criar objeto 2

// bmw.teste = "pneus 17'" // cria propriedade
// bmw.andar = function() {
//      console.log("andou!")
// }

fiat.marca = "Fiat" 

// new keyword

const gurgel = new Carro();

// 1 Cria um novo objeto
//gurgel = {};

// 2 Define o protótipo
gurgel.prototype = Carro.prototype;

// 3 Aponta a variável this para o objeto
//this = gurgel;

// 4 Executa a função, substituindo this pelo objeto
gurgel.marca = 'Marca';
gurgel.preco = 0;

// 5 Retorna o novo objeto
// return gurgel = {
//   marca: 'Marca',
//   preco: 0,
// }

function Animal(racaAtribuida, nomeAtribuido) {
    this.raca = racaAtribuida;
    this.nome = nomeAtribuido;
}

const cachorro = new Animal("pinscher", "marlene");
console.log(cachorro);


// this keyword
function Carro2(marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    //this.taxa = 1.5;
    //const precoFinal = precoInicial * this.taxa
    this.marca = marca; // só acessa issp
    this.preco = precoFinal; // só acessa issp
}

const monza = new Carro2('Monza', 75000)
