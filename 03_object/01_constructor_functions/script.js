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

}

const bmw = new Carro(); // cria objeto
bmw.teste = "pneus 17'" // cria propriedade
