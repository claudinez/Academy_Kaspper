/*
Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores
*/

// Lê três valores
var valor1 = 15;
var valor2 = 21;
var valor3 = 9;

// Inicializa as variáveis para os dois maiores valores
var maior1, maior2;

// Verifica quais são os dois maiores valores
if (valor1 > valor2 && valor1 > valor3) {
    maior1 = valor1;
    maior2 = valor2 > valor3 ? valor2 : valor3;
} else if (valor2 > valor1 && valor2 > valor3) {
    maior1 = valor2;
    maior2 = valor1 > valor3 ? valor1 : valor3;
} else {
    maior1 = valor3;
    maior2 = valor1 > valor2 ? valor1 : valor2;
}

// Calcula a soma dos dois maiores valores
var soma = maior1 + maior2;

// Escreve a soma na tela
console.log("A soma dos dois maiores valores é: " + soma);
