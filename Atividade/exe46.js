/*
	Acrescentar uma mensagem de 'VALOR INVÁLIDO' no exercício [44] caso o segundo valor informado seja ZERO. 
*/

// Lê o primeiro valor
var valor1 = 20;

// Inicializa o segundo valor
var valor2 = 0;

// Verifica se o valor é zero e pede um novo valor caso seja
while (valor2 === 0) {
    console.log("VALOR INVÁLIDO: O segundo valor não pode ser zero. Por favor, digite um valor diferente de zero.");
    // Aqui você deve substituir por uma função adequada para ler o valor2
    // Como exemplo, vamos usar uma entrada fixa, mas no seu ambiente de execução,
    // você precisa substituir isso por uma entrada do usuário.
    valor2 = 5; // Substitua por entrada real
}

// Calcula o resultado da divisão
var resultado = valor1 / valor2;

// Imprime o resultado da divisão
console.log("O resultado da divisão é: " + resultado);

