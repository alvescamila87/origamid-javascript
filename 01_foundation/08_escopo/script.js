//escopo

//var carro = 'Fusca'
function mostrarCarro() {
    var carro = 'Fusca'
    console.log(carro)
}

mostrarCarro();
//console.log(carro); -> não funciona

// 'use strict'
//carro = 'Fusca' -> ai funciona se usar strict mode

// escopo de bloco {} -> let e const não vazam do bloco
{   var mes = 'Dezembro'
    //let mes = 'Dezembro'
    console.log(mes)
}
console.log(mes)

// escopo de função

//exercicios:

// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
  }
  console.log(cor, marca, portas);
  
  // Como corrigir o erro abaixo?
  const dois = 2;
  function somarDois(x) {
    //const dois = 2;
    return x + dois;
  }
  function dividirDois(x) {
    return x / dois;
  }
  somarDois(4);
  dividirDois(6);
  
  // O que fazer para total retornar 500?
  //var numero = 50;
  const numero = 50;
  
  //for(var numero = 0; numero < 10; numero++) {
  for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);
  