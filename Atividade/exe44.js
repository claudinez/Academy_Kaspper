/*
Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, 
deve ser lido um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero
e imprimir o resultado da divisão do primeiro valor lido pelo segundo valor lido.
(utilizar a estrutura REPITA). 

*/

// Simulação da leitura de valores (substitua com valores de entrada reais para testes)
var valor1 = 10; // Substitua por prompt ou entrada real
var valor2;

do {
    // Simulação da leitura do segundo valor
    valor2 = 0; 

    // Verifica se o valor é zero e pede um novo valor caso seja
    if (valor2 === 0) {
        console.log("O segundo valor não pode ser zero. Por favor, digite um valor diferente de zero.");
        valor2 = 5;
    }
} while (valor2 === 0);

// Calcula o resultado da divisão
var resultado = valor1 / valor2;

// Imprime o resultado da divisão
console.log("O resultado da divisão é: " + resultado);
