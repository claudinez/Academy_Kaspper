/*
Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem crescente. 
*/

// Lê três valores
var valor1 = 17;
var valor2 = 21;
var valor3 = 9;

// Inicializa um array com os valores
var valores = [valor1, valor2, valor3];

// Ordena o array em ordem crescente
valores.sort((a, b) => a - b);

// Escreve os valores em ordem crescente na tela
console.log("Os valores em ordem crescente são: " + valores);

