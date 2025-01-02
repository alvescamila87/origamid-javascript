// arrays e loops

var videoGames = ['PS5', 'XBOX', 'Nintendo', "PC", "Atari", "SEGA"]
console.log(videoGames[2])

videoGames.pop()
console.log(videoGames)

videoGames.push('Switch')
console.log(videoGames)

console.log(videoGames.length)

// for loop
for(var i = 0; i < videoGames.length; i++) {
    console.log(i = i, videoGames[i])
    //if(videoGames[i] === 'Nintendo') break
}

var i = 0;
while (i < 10) {
    i++
    console.log(i)
}


// for each
videoGames.forEach(function(item) {
    console.log(item)
})

var frutas = ['banana', 'pera', 'abacaxi', 'uva']

frutas.forEach((fruta, index, array) => {
    console.log(index, " -> ", fruta, array)
})

//exercicio

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var titulosMundiaisBrasil = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for(var i = 0; i < titulosMundiaisBrasil.length; i++) {
    console.log(`O Brasil ganhou a copa do mundo no ano de ${titulosMundiaisBrasil[i]}.`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

for(var i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
    if(frutas[i] === "Pera") break
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length -1]
console.log(ultimaFruta)