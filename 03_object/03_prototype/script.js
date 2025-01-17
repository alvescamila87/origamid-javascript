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
