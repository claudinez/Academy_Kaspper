/*
Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
 uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o 
 aluno é aprovado). Escrever também a média calculada.
 */

 // Notas das avaliações
var nota1 = 7.0;  
var nota2 = 5.5;  

// Calcula a média aritmética simples
let media = (nota1 + nota2) / 2;

// Verifica se o aluno foi aprovado
let resultado;
if (media >= 6) {
    resultado = "Aprovado";
} else {
    resultado = "Reprovado";
}

// Escreve a média calculada e o resultado na tela
console.log("A média do aluno é: " + media.toFixed(2));
console.log("O aluno está: " + resultado);
