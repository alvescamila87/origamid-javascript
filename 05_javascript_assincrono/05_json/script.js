//json
fetch('./dados.json')
.then(response => response.json())
.then(json => {
    //console.log(json[0].aula)
    json.forEach(materia => {
        console.log(materia.tempo)
    })
})

//json parse

fetch('./dados.json')
.then(response => response.text())
.then(jsonText => {
    const jsonJS = JSON.parse(jsonText)
    //console.log(jsonText)
    console.log(jsonJS)
})