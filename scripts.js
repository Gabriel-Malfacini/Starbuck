/* 
Javascript não é java 

Variaveis ( qualquer linguagem de programação)
- Um pedacinho da memoria do computador que voce separa para guardar oque quiser 

Função é um pedacinho de codigo quando só é chamado
console.log= ferramneta do js na qual tudo que eu colocar dentro ele mostra na tela 

Algoritimo é uma receita de bolo

ducument = html
queryselector = selecionar oque eu quiser
*/

let imagem = document.querySelector(".copao")
let fundo = document.querySelector(".circulo")

function trocaImagem(endereco){
imagem.src = endereco
}

function trocaFundo(cor){
    fundo.style.background = cor
}