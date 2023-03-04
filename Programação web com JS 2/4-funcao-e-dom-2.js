//Crie uma função para exibir uma mensagem de boas vindas numa tag H1 dentro de uma div na página HTML.
function tagH1() {
    let novaDiv = document.createElement('div');
    document.body.appendChild(novaDiv);
    console.log(novaDiv);

    let novaH1 = document.createElement('h1');
    novaH1.innerHTML = "Bem-vindo";
    novaDiv.appendChild(novaH1);
}
tagH1();