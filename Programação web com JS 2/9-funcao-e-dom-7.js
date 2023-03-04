//Crie uma função para somar dois valores informados pelo usuário e exibir o resultado numa tag H1 dentro de uma div na página HTML.
function soma(a, b) {
    let novaDiv = document.createElement('div');
    document.body.appendChild(novaDiv);
    console.log(novaDiv);

    let novoH1 = document.createElement('h1');
    novoH1.innerHTML = "Resultado: " + (a + b);
    novaDiv.appendChild(novoH1);


}
soma(5, 3);