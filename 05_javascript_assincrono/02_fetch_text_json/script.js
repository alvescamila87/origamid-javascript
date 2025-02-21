//Fetch
const doc = fetch('./doc.txt')

// doc.then(resolucao => {
//   console.log(resolucao.text())
// })

//Response
//transformar o corpo

doc.then(resolucao => {
  return resolucao.text()
}).then(body => {
  const conteudo = document.querySelector('.conteudo')
  conteudo.innerText = body
  //console.log(body)
})

const cep1 = fetch('https://viacep.com.br/ws/89030311/json');

//text()
cep1
.then(resolve => resolve.text())
.then(body => {
  console.log(body)
  const conteudo = document.querySelector('.conteudo2');
  conteudo.innerText = body
})

//json()
const cep2 = fetch('https://viacep.com.br/ws/89030311/json');
cep2
.then(resolve => resolve.json())
.then(body => {
  console.log(body)
  const conteudo = document.querySelector('.conteudo3');
  conteudo.innerText = body.logradouro
})

