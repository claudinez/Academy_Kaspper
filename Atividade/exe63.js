/*
Escreva um algoritmo para ler 10 números e ao final da leitura escrever a soma total dos 10 números lidos. 
*/

// Simulação da leitura de 10 números
var numeros = [2, 5, 8, 12, 7, 9, 15, 1, 4, 6]; // Valores fixos para os números

// Inicializa a soma total
var somaTotal = 0;

// Loop para somar os 10 números
for (var i = 0; i < 10; i++) {
    somaTotal += numeros[i];
}

// Imprime a soma total dos 10 números lidos
console.log("A soma total dos 10 números lidos é: " + somaTotal);
