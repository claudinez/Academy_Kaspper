/*
Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e quantidade mínima 
em estoque de um produto. 
Calcular e escrever a quantidade média ((quantidade média = quantidade máxima + quantidade mínima)/2). 
Se a quantidade em estoque for maior ou igual a quantidade média escrever a mensagem 'Não efetuar compra',
senão escrever a mensagem 'Efetuar compra'. 
*/

// Lê a quantidade atual em estoque
var quantidadeAtual = 150;

// Lê a quantidade máxima em estoque
var quantidadeMaxima = 300;

// Lê a quantidade mínima em estoque
var quantidadeMinima = 100;

// Calcula a quantidade média
var quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;

// Escreve a quantidade média na tela
console.log("A quantidade média é: " + quantidadeMedia);

// Verifica se a quantidade atual em estoque é maior ou igual à quantidade média
if (quantidadeAtual >= quantidadeMedia) {
    console.log("Não efetuar compra");
} else {
    console.log("Efetuar compra");
}
