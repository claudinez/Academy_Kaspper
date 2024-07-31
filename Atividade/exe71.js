/*
Faça um algoritmo para ler uma quantidade e a seguir ler esta quantidade de números.
Depois de ler todos os números o algoritmo deve apresentar na tela o maior dos números lidos 
e a média dos números lidos. 
*/

// Inicializa variáveis
var quantidade = 5; // Exemplo de quantidade de números a serem lidos
var numeros = [10, 20, 30, 40, 50]; // Exemplo de números lidos
var soma = 0;
var maiorNumero = numeros[0];

// Loop para ler os números e calcular a soma e o maior número
for (var i = 0; i < quantidade; i++) {
    var numero = numeros[i];
    soma += numero;

    if (numero > maiorNumero) {
        maiorNumero = numero;
    }
}

// Calcula a média dos números
var media = soma / quantidade;

// Exibe o maior número e a média dos números lidos
console.log("Maior número lido: " + maiorNumero);
console.log("Média dos números lidos: " + media.toFixed(2));
