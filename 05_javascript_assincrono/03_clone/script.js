//clone

const texto = fetch('https://viacep.com.br/ws/01001000/json/');

texto
.then(resolve => {
  const resolve2 = resolve.clone()
  resolve.text().then(text => console.log(text))
  resolve2.json().then(json => console.log(json))
  //console.log(resolve)
})
.then(body => console.log(body))

//headers

const viacep = fetch('https://viacep.com.br/ws/01001000/json/');

viacep.then(response => response.headers.forEach(console.log))

//status

const site = fetch('https://viacep.com.br/ws/01001000/json/');

site.then(response => {
  console.log(response.status)
  console.log(response.url)
  console.log(response.type) // cors ou basics
})

//exercicios