//Crie uma função para fazer a divisão entre dois valores e exibir o resultado numa tag parágrafo dentro de uma div na página HTML.
function subtrai(a, b) {
    let novaDiv = document.createElement('div');
    document.body.appendChild(novaDiv);
    console.log(novaDiv);

    let paragrafo = document.createElement('p');
    paragrafo.innerHTML = "Resultado: " + (a / b);
    novaDiv.appendChild(paragrafo);

}
subtrai(10, 2);