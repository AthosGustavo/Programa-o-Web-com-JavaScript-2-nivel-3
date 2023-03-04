//Crie uma função para somar dois valores e exibir o resultado num parágrafo dentro de uma div na página HTML.
function resultado(a, b) {
    let novaDiv = document.createElement('div');
    document.body.appendChild(novaDiv);
    console.log(novaDiv);

    let paragrafo = document.createElement('p');
    paragrafo.innerHTML = "Resultado: " + (a + b);
    novaDiv.appendChild(paragrafo);
}
resultado(5, 6);