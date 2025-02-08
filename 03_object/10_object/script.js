//Object

// construtor de object
const pessoa = new Object({
  nome: 'Camila',
  idade: 36
})

console.log(pessoa)

//Métodos de Object: Object.create(obj, defineProperties)
const carro = {
  rodas: 4,
  init(marca) {
    this.marca = marca;
    return this;
  },
  acelerar() {
    return `${this.marca} acelerou as ${this.rodas} rodas`;
  },
  buzinar() {
    return this.marca + ' buzinou';
  }
}

const honda = Object.create(carro);
honda.init('Honda').acelerar();

//Object.defineProperties(): Object.defineProperties(alvo, propriedades)
const moto = {}
Object.defineProperties(moto, {
  rodas: {
    value: 2,
    configurable: false, // impede deletar e mudança de valor
    enumarable: true, // torna enumerável
  },
  capacete: {
    value: true,
    configurable: true,
    writable: false, // impede mudança de valor
  },
})

moto.rodas = 4;
delete moto.capacete;
moto;
// {rodas: 2}

//get e set
const moto = {}
Object.defineProperties(moto, {
  velocidade: {
    get() {
      return this._velocidade;
    },
    set(valor) {
      this._velocidade = 'Velocidade ' + valor;
    }
  },
})

moto.velocidade = 200;
moto.velocidade;
// Velocidade 200

//Object.getOwnPropertyDescriptors(obj)
Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeight');
// Puxa de uma única propriedade

//Object.keys(obj), Object.values(obj) Object.entries(obj)
Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

const carro2 = {
  marca: 'Ford',
  ano: 2018,
}
Object.keys(carro2);
// ['marca', 'ano']
Object.values(carro2);
// ['Ford', 2018]
Object.entries(carro2);
// [['marca', 'Ford'], ['ano', 2018]]

//Object.getOwnPropertyNames(obj)
Object.getOwnPropertyNames(Array);
// ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const carro3 = {
  marca: 'Ford',
  ano: 2018,
}
Object.getOwnPropertyNames(carro3);
// ['marca', 'ano']

//Object.getPrototypeOf() e Object.is()
const frutas = ['Banana', 'Pêra']
Object.getPrototypeOf(frutas);
Object.getPrototypeOf(''); // String

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

Object.is(frutas1, frutas2); // false

//Object.freeze(), Object.seal(), Object.preventExtensions()
const carro4 = {
  marca: 'Ford',
  ano: 2018,
}
Object.freeze(carro4);
Object.seal(carro4);
Object.preventExtensions(carro4);

Object.isFrozen(carro4); // true
Object.isSealed(carro4); // true
Object.isExtensible(carro4); // false

//Propriedades e Métodos do Protótipo
const frutas3 = ['Banana', 'Uva'];
frutas3.constructor; // Array

const frase = 'Isso é uma String';
frase.constructor; // String

//{}.hasOwnProperty('prop') e {}.propertyIsEnumerable('prop')
const frutas4 = ['Banana', 'Uva'];

frutas4.hasOwnProperty('map'); // false
Array.hasOwnProperty('map'); // false
Array.prototype.hasOwnProperty('map'); // true

Array.prototype.propertyIsEnumerable('map'); // false
window.propertyIsEnumerable('innerHeight'); // true

//{}.isPrototypeOf(valor)
const frutas5 = ['Banana', 'Uva'];

Array.prototype.isPrototypeOf(frutas5); // true

//{}.toString()
const frutas6 = ['Banana', 'Uva'];
frutas6.toString(); // 'Banana,Uva'
typeof frutas6; // object
Object.prototype.toString.call(frutas6); // [object Array]

const frase2 = 'Uma String';
frase2.toString(); // 'Uma String'
typeof frase2; // string
Object.prototype.toString.call(frase2); // [object String]

const carro7 = {marca: 'Ford'};
carro7.toString(); // [object Object]
typeof carro7; // object
Object.prototype.toString.call(carro7); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]








