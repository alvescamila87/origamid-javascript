// object (node js) != user (usuário) != host (DOM)

// Liste 5 objetos nativos
Object
Array
Function
String
Number

// Liste 5 objetos do browser
Window
Document
History
HTMLCollection
NodeList

// Liste 2 Métodos, Propriedades ou Objetos
// presentes no Chrome que não existem no Firefox

if (typeof document.webkitHidden !== "undefined") {
    console.log('Existe')
} else {
    // abrir no navegador que não possui: firefox
    console.log('Não existe')
}
