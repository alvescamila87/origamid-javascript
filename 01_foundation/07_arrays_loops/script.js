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
}

var i = 0;
while (i < 10) {
    i++
    console.log(i)
}