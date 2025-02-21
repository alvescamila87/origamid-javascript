//.blob()

const imagem = fetch('./imagem.jpg')

imagem
.then(resolve => resolve.blob())
.then(body => {
  const blobURL = URL.createObjectURL(body)
  const imagemDom = document.querySelector('img');
  imagemDom.src = blobURL
  console.log(imagemDom)
})