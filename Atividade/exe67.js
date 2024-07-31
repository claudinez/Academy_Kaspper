/*
Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 
(inclusive) e 100 (inclusive). 
*/

// Definindo os limites do intervalo
var inicio = 15;
var fim = 100;

// Inicializa a soma dos inteiros no intervalo e o contador de números
var soma = 0;
var contador = 0;

// Loop para somar os inteiros entre inicio e fim e contar a quantidade de números
for (var i = inicio; i <= fim; i++) {
    soma += i;
    contador++;
}

// Calcula a média aritmética
var media = soma / contador;

// Imprime a média aritmética
console.log("A média aritmética dos números inteiros entre " + inicio + " e " + fim + " é: " + media.toFixed(2));
