/*
27)	Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. 
*/

// Lê três valores
var valor1 = 15;
var valor2 = 21;
var valor3 = 9;

// Verifica qual o maior valor
var maiorValor;

if (valor1 > valor2 && valor1 > valor3) {
    maiorValor = valor1;
} else if (valor2 > valor1 && valor2 > valor3) {
    maiorValor = valor2;
} else {
    maiorValor = valor3;
}

// Escreve o maior valor na tela
console.log("O maior valor é: " + maiorValor);
