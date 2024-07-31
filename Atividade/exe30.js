/*
Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam ou não
um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados.
*/

// Lê os valores dos lados do triângulo
var A = 10;
var B = 10;
var C = 10;

// Verifica se os valores formam um triângulo
if (A < B + C && B < A + C && C < A + B) {
    console.log("Os valores formam um triângulo.");
} else {
    console.log("Os valores não formam um triângulo.");
}
