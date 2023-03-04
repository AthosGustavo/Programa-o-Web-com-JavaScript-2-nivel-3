//Crie uma função anônima para calcular o fatorial de um número informado pelo usuário e exibir o resultado numa tag parágrafo dentro de uma div na página HTML. Use uma chamada de função recorrente.
(function () {

    let numero = parseInt(prompt("Digite um número"))
    function fatorial(numero) {
        if (numero === 1 || numero === 0) {
            return 1;
        } else {
            return numero * fatorial(numero - 1);
        }
    }

    let resultado = fatorial(numero);
    let novaDiv = document.createElement('div');
    document.body.appendChild(novaDiv);
    let tagP = document.createElement('p');
    let fraseTagP = document.createTextNode(resultado);
    tagP.appendChild(fraseTagP);
    novaDiv.appendChild(tagP);
    console.log(novaDiv);

})()
