//SetTimeout and SetInterval
//SetTimeout ativa a função de callback só 1x, espera todo código acabar, para executar o que possui dentro dele.
//SetInterval ativa a função de callback a cada tempo


//SetTimeout
function espera(texto) {
    console.log(texto);
}

//setTimeout(espera, 1000, 'Passou 1s')
setTimeout(espera, 0, 'Passou 0s')

for(let i = 0; i < 20; i++) {
    setTimeout(() => {
      console.log(i);
    }, 300 * i);
  }
  

 //SetInterval
function loop(texto) {
    console.log(texto);
}

//setTimeout(espera, 1000, 'Passou 1s')
setInterval(espera, 1000, 'Passou 1s')

let x = 0;
    setInterval(() => {
      console.log(x++);
    }, 3000);
   