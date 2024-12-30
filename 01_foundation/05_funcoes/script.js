// functions

function areaQuadrado(lado) {
    return lado * lado
}

console.log("Área do quadrado: ", areaQuadrado(3),  "m²");

function pi() {
    return 3.15;
}

console.log(5 * pi())

function imc(peso, altura) {
    const imc = peso / (altura ** 2)
    return imc
}

console.log(imc(52, 1.63));


// function click
addEventListener('click', function() {
    console.log('clicked!')
})

//ou dessa forma:

function mostraConsole() {
    console.log('Clicou')
}

addEventListener('click', mostraConsole)