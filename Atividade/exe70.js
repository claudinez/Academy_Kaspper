/*
Faça um programa que leia 100 valores e no final, escreva o maior e o menor valor lido. 
*/

// Inicializa as variáveis para o maior e menor valor
var maiorValor;
var menorValor;

// Lista de 100 valores fixos como exemplo (pode ser substituída por entradas reais)
var valores = [5, 3, 8, 15, 42, 23, 18, 6, 9, 11, 0, 25, 33, 47, 29, 10, 16, 55, 62, 38, 74, 85, 71, 77, 99, 14, 7, 2, 4, 1, 50, 60, 61, 73, 64, 56, 52, 51, 58, 63, 68, 66, 67, 72, 75, 82, 88, 93, 91, 90, 87, 95, 94, 96, 97, 98, 17, 12, 13, 19, 21, 20, 22, 26, 27, 28, 30, 31, 32, 34, 35, 36, 37, 39, 40, 41, 43, 44, 45, 46, 48, 49, 53, 54, 57, 59, 65, 69, 70, 76, 78, 79, 80, 81, 83, 84, 86, 89, 92, 100]; // Suponha que você tenha uma lista de 100 valores

// Inicializa o maior e o menor valor com o primeiro valor da lista
maiorValor = valores[0];
menorValor = valores[0];

// Loop para ler os 100 valores
for (var i = 1; i < valores.length; i++) {
    var valor = valores[i];

    // Atualiza o maior e o menor valor conforme necessário
    if (valor > maiorValor) {
        maiorValor = valor;
    }
    if (valor < menorValor) {
        menorValor = valor;
    }
}

// Imprime o maior e o menor valor lido
console.log("Maior valor lido: " + maiorValor);
console.log("Menor valor lido: " + menorValor);
