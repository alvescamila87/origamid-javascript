//Async await

// async function puxarDados() {
//     try {
//         const responseDados = await fetch('./dados.json') //promise
    
//         const jsonDados = await responseDados.json(); //promise
    
//         //console.log(responseDados)
//         //console.log(jsonDados)
//         document.body.innerText = jsonDados.aula

//     } catch (erro) {
//         console.log(erro)
//     }
    
// }

// puxarDados()

// // usando THEN

// function iniciarFetch() {
//     fetch('./clientes.json')
//     .then(response => response.json())
//     .then(dadosJson => {
//         //console.log(dadosJson)
//         const body = document.body.innerText = dadosJson.nome
//         console.log(body)
//     })
// }

// iniciarFetch()

// usar await simultaneamente
async function buscarDados() {
    const responseClientes = fetch("./clientes.json");
    const responseDados = fetch("./dados.json");

    const jsonClientes = await (await responseClientes).json();
    const jsonDados = await (await responseDados).json();

    console.log(jsonClientes)
    console.log(jsonDados);
}

buscarDados();