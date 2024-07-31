/*
Ler 10 valores, calcular e escrever a média aritmética desses valores lidos. 
*/

// Valores simulados para teste
var valores = [5, 12, 25, 18, 9, 10, 20, 7, 14, 30];

// Inicializa a soma dos valores
var soma = 0;

// Loop para calcular a soma dos valores
for (var i = 0; i < 10; i++) {
    soma += valores[i];
}

// Calcula a média aritmética
var media = soma / 10;

// Imprime a média aritmética
console.log(`A média aritmética dos valores é: ${media}`);
