//Crie uma função para calcular o fatorial de um número informado pelo usuário e exibir o resultado numa tag parágrafo dentro de uma div na página HTML.
function exibeFatorial(numero) {

    function fatorial(numero) {

        if (numero === 1 || numero === 0) {
            return 1;
        } else {
            return numero * fatorial(numero - 1);

        }
    }

    const resultado = fatorial(numero);
    const novaDiv = document.createElement('div');
    document.body.appendChild(novaDiv)
    const tagP = document.createElement('p');
    const fraseTagP = document.createTextNode(resultado);
    tagP.appendChild(fraseTagP);
    novaDiv.appendChild(tagP);
    console.log(novaDiv);

}
exibeFatorial(4);