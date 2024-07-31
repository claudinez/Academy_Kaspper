/*
Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). 
Considere que o N será sempre maior que ZERO. 
*/

// Lê o valor de N
var N = 10

// Verifica se N é maior que zero
if (N > 0) {
    // Imprime os valores inteiros de 1 a N
    for (var i = 1; i <= N; i++) {
        console.log(i);
    }
} else {
    console.log("O valor de N deve ser maior que zero.");
}

