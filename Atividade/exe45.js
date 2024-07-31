/*
	Reescreva o exercício anterior utilizando a estrutura ENQUANTO
*/

// Simulação da leitura de valores (substitua com valores de entrada reais para testes)
var valor1 = 10; 
var valor2 = 0; 

// Verifica se o valor é zero e pede um novo valor caso seja
while (valor2 === 0) {
    // Simulação da leitura do segundo valor
    valor2 = 5; 

    if (valor2 === 0) {
        console.log("O segundo valor não pode ser zero. Por favor, digite um valor diferente de zero.");
    }
}

// Calcula o resultado da divisão
var resultado = valor1 / valor2;

// Imprime o resultado da divisão
console.log("O resultado da divisão é: " + resultado);
