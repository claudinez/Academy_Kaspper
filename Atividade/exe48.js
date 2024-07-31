/*
Escreva um algoritmo para ler as notas da 1a. e 2a. avaliações de um aluno, calcule e imprima a média 
(simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. 
*/

// Declaração das notas
var nota1;
var nota2;

// Simulação da leitura de valores válidos (0 a 10)
do {
    nota1 = 8;  // Simulando uma entrada válida para nota1
    if (nota1 < 0 || nota1 > 10 || isNaN(nota1)) {
        console.log("Nota inválida. Digite uma nota entre 0 e 10.");
    }
} while (nota1 < 0 || nota1 > 10 || isNaN(nota1));

do {
    nota2 = 9;  // Simulando uma entrada válida para nota2
    if (nota2 < 0 || nota2 > 10 || isNaN(nota2)) {
        console.log("Nota inválida. Digite uma nota entre 0 e 10.");
    }
} while (nota2 < 0 || nota2 > 10 || isNaN(nota2));

// Calcula a média simples
var media = (nota1 + nota2) / 2;

// Imprime a média
console.log("A média do aluno é: " + media.toFixed(2));
