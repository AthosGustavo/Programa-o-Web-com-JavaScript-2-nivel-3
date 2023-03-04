//Crie uma função para calcular o fatorial de um número informado pelo usuário e exibir o resultado numa tag H1 dentro de uma div na página HTML.
function exibirFatorial(numero) {

    function fatorial(numero) {
        if (numero === 0 || numero === 1) {
            return 1;
        } else {
            return numero * fatorial(numero - 1);
        }
    }


    const resultado = fatorial(numero);
    const titulo = document.createElement('h1');
    const textoTitulo = document.createTextNode(`${resultado}`);
    titulo.appendChild(textoTitulo);
    const novaDiv = document.createElement('div');
    document.body.appendChild(novaDiv);
    novaDiv.appendChild(titulo);
    console.log(novaDiv);
}
exibirFatorial(4);
