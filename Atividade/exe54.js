/*
Modifique o exercício anterior para aceitar somente valores maiores que 0 para N. Caso o valor informado 
(para N) não seja maior que 0, deverá ser lido um novo valor para N. 
*/

// Lê o valor de N
var N = 0;

// Verifica se N é maior que zero e continua pedindo um novo valor se não for
do {
    if (N <= 0 || isNaN(N)) {
        console.log("O valor de N deve ser maior que zero.");
        break;
    }
} while (N <= 0 || isNaN(N));

// Imprime os valores inteiros de 1 a N
for (var i = 1; i <= N; i++) {
    console.log(i);
}
