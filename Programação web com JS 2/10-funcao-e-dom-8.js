//Crie uma função de seta (arrow function) para calcular o quadrado de dois valores informados pelo usuário. Exiba o resultado numa tag H1 dentro de uma div na página HTML.
let funcao = (a, b) => {
    let novaDiv = document.createElement('div');
    document.body.appendChild(novaDiv);
    console.log(novaDiv);

    let novoH1 = document.createElement('h1');
    novoH1.innerHTML = "Resultado A: " + Math.pow(a, 2) +
        " Resultado B: " + Math.pow(b, 2);
    novaDiv.appendChild(novoH1);
}
funcao(2, 3);