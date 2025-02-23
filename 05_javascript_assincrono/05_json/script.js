//json método de fetch
fetch('./dados.json')
.then(response => response.json())
.then(json => {
    console.log(json) // retorna objeto JS
    console.log(json[0].aula)
    json.forEach(item => console.log(item.aula))
})

//JSON.parse()
fetch('./dados.json')
.then(response => response.text())
.then(jsonText => {
    console.log(jsonText) // exibe os dados json em text
    const jsonConterverTextParaJs = JSON.parse(jsonText)
    console.log(jsonConterverTextParaJs) // converteu de text retorna objeto JS
})

//JSON.stringify()
const configuracoes = {
    empresa: "Google",
    tempo: 25.5,
    localizacao: "EUA"
}

const stringConfig = JSON.stringify(configuracoes)
console.log(stringConfig) // converteu objeto para string JSON

// Permite salvar um item inteiro como 'string'
// localStorage.config = JSON.stringify(configuracoes);
// console.log(JSON.parse(localStorage.config))
