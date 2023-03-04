//Crie uma função para exibir uma mensagem de boas vindas numa tag parágrafo dentro de uma div na página HTML.
let novaDiv = document.createElement('div');
document.body.appendChild(novaDiv);
console.log(novaDiv);

let paragrafo = document.createElement('p');
paragrafo.innerHTML = "Bem-vindo";
novaDiv.appendChild(paragrafo);