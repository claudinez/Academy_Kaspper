/*
Ler 2 valores, calcular e escrever a soma dos inteiros existentes entre os 2 valores lidos
(incluindo os valores lidos na soma). Considere que o segundo valor lido será sempre maior que o primeiro
 valor lido. 
*/

// Valores fixos para os dois números
var valor1 = 3;
var valor2 = 7;

// Inicializa a soma dos inteiros entre valor1 e valor2 (incluindo ambos)
var soma = 0;

// Loop para somar os inteiros entre valor1 e valor2
for (var i = valor1; i <= valor2; i++) {
    soma += i;
}

// Imprime a soma dos inteiros entre valor1 e valor2
console.log("A soma dos inteiros entre " + valor1 + " e " + valor2 + " é: " + soma);
