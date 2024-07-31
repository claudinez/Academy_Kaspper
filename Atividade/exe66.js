/*
66)	O mesmo exercício anterior, mas agora, considere que o segundo valor lido poderá ser maior ou menor 
que o primeiro valor lido, ou seja, deve-se testá-los. 
*/

// Valores fixos para os dois números
var valor1 = 8;
var valor2 = 5;

// Inicializa a soma dos inteiros entre valor1 e valor2 (incluindo ambos)
var soma = 0;

// Verifica qual valor é maior e define o intervalo corretamente
var inicio, fim;

if (valor1 < valor2) {
    inicio = valor1;
    fim = valor2;
} else {
    inicio = valor2;
    fim = valor1;
}

// Loop para somar os inteiros entre inicio e fim
for (var i = inicio; i <= fim; i++) {
    soma += i;
}

// Imprime a soma dos inteiros entre valor1 e valor2
console.log("A soma dos inteiros entre " + inicio + " e " + fim + " é: " + soma);
