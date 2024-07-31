/*
Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.  Considerar 
que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é:

 */

// Notas do aluno
var nota1 = 7.5;  // Exemplo de valor
var nota2 = 8.0;  // Exemplo de valor
var nota3 = 9.0;  // Exemplo de valor

// Define os pesos das notas
var peso1 = 2;
var peso2 = 3;
var peso3 = 5;

// Calcula a média final
var mediaFinal = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3);

// Escreve a média final na tela
console.log("A média final do aluno é: " + mediaFinal.toFixed(2));