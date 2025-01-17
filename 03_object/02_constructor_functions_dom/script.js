//construction functions 02
const Dom = {
    seletor: "li",
    //elemento() {}
    elemento: function() {
        //console.log(this.seletor)
        //const elementoSelecionado = document.querySelector(this.seletor)
        //console.log(elementoSelecionado)
        return document.querySelector(this.seletor);
    },
    ativar() {
        const elementoSelecionado = this.elemento();
        elementoSelecionado.classList.add('ativar');
        // ou assim: this.element().classList.add('ativar');
    }
}

Dom.seletor = "ul";
Dom.ativar();

// usar função construtora
function Dom2(seletor) {
    //this.seletor = "li"
    this.elemento = function() {
        return document.querySelector(seletor);
    }
    this.ativar = function() {
        const elementoSelecionado = this.elemento();
        elementoSelecionado.classList.add('ativar');
    }
}
const li = new Dom2('li');
const ul = new Dom2('ul');

// passando parâmetros

function Dom3(seletor) {
    this.elemento = function() {
        document.querySelector(seletor)
    },
    this.ativar = function(classe) {
        this.elemento().classList.add(classe)
    }
}

const body = new Dom3('body');
body.ativar('parametro1_classe')

// exercicios

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
      console.log(this.nome + ' andou');
    }
}

function Pessoa(nome, idade) {
    this.andar = function() {
        console.log(nome + ' de ' + idade + ' anos de idade ' + ' andou!');
    }
  }

  const joao = new Pessoa('João', 10);
  joao.andar()  

  
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos

  const maria = new Pessoa('Maria', 12)
  maria.andar();

  const zebedeu = new Pessoa('Zebedeu', 30)
  zebedeu.andar();
  
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos

  function Dom4(seletor) {
    this.elementos = document.querySelectorAll(seletor)
    this.adicionarClasse = function(classe) {
        this.elementos.forEach(element => {
            element.classList.add(classe)
        });
    },
    this.removeClasse = function(classe) {
        this.elementos.forEach(element =>{
            element.classList.remove(classe)
        })
    }
  }




  
  