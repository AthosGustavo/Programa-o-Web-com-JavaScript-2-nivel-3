//Crie uma função de seta (arrow function) para calcular a soma entre três valores informados pelo usuário e exibir o resultado no console.
let soma = () => {
    let acumulador = 0;
    for (let contador = 0; contador < 3; contador++) {

        let entrada = parseInt(prompt("Digite um número inteiro"));
        acumulador = entrada + acumulador;
    }
    console.log(acumulador);

}
soma();
