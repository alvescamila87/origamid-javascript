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