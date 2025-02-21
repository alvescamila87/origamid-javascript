//exercicios

// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar


const inputCEP = document.getElementById('CEP')
const btnCEP = document.getElementById('btnCEP')
const resultadoCEP = document.querySelector('.resultadoCEP')
console.log(inputCEP)
console.log(btnCEP)
console.log(resultadoCEP)

btnCEP.addEventListener('click', handleClickCEP)

function handleClickCEP() {
  event.preventDefault();
  const cep = inputCEP.value
  consultaCEP(cep)
  //console.log(event)
}


function consultaCEP(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.text())
  .then(body => {
    resultadoCEP.innerText = body
  })

}

//consultaCEP(89030311)


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const btcParagrafo = document.querySelector('.btc')

function consultaAPI() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(btcJson => {
    console.log(btcJson.BRL.buy)
    btcParagrafo.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',')
  })
}

setInterval(() => {
  consultaAPI()
}, 500)

//setInterval(consultaAPI, 1000*30)
//consultaAPI()


// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const piadaParagrafo = document.querySelector('.piada')
const btnProxima = document.querySelector('.btnProxima')
console.log(piadaParagrafo)
console.log(btnProxima)

function consultaPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(body => {    
    console.log(body)
    piadaParagrafo.innerText = body.value
  })
}

//consultaPiada()

btnProxima.addEventListener('click', consultaPiada)


