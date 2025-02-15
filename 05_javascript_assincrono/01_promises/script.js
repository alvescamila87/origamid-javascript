// //Promises
// const promessa = new Promise(function(resolve, reject) {
//   let condicao = true;
//   if(condicao) {
//     resolve("Resolve a promessa e ativa a promessa")
//   } else {
//     reject(Error("Um erro ocorreu na promisse"))
//   }
// })

// console.log(promessa)

// //then: fica esperando a promise ser resolvida, ou seja, ser ativada pelo resolve.
// promessa.then(function(resolucao) {
//   console.log(resolucao)
// })

// // assincrono só faz sentido com settimeout

// const promessa2 = new Promise(function(resolve, reject) {
//   let condicao = true;
//   //let condicao = false; 
//   if(condicao) {
//     setTimeout(() => {
//       resolve({ nome: "Camila", idade: 36 })
//     }, 1000)
//   } else {
//     reject(Error("Um erro ocorreu na promisse"))
//   }
// })

// console.log(promessa)

// //then: fica esperando a promise ser resolvida, ou seja, ser ativada pelo resolve.
// const retorno = promessa2.then(function(resolucao) {
//   console.log(resolucao)
//   return 'Teste'
// }).then(resolucao => {
//   console.log(resolucao)
// })

// console.log(retorno)

// //catch: fica esperando a promise ser rejeitada
// const retorno2 = promessa2.then(resolucao => {
//   resolucao.profissao = 'Dev Software'
//   return resolucao
// }).then(resolucao => {
//   console.log(resolucao)
// }).catch(rejeitada => [
//   console.log(rejeitada)
// ])

// console.log(retorno)

// // catch dentro de then:
// promessa.then(resolucao => {
//   console.log(resolucao);
// }, reject => {
//   console.log(reject);
// });

// //finally: sempre executado
// promessa.then(resolucao => {
//   console.log(resolucao);
// }, reject => {
//   console.log(reject);
// }).finally(
//   console.log("Sempre executado!")
// )

// promise.all()
const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Usuário logado')
  }, 1000)
})

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve('Dados carregados')
  }, 2000)
})

// passa o objeto da promise com um array com o nome das promessas
const carregouTudo = Promise.all([login, dados])

console.log(carregouTudo)

carregouTudo.then((resolucao) => {
  console.log(resolucao)
})