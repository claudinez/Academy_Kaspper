/*
Ler o número de alunos existentes em uma turma e, após isto, ler as notas destes alunos, calcular
 e escrever a média aritmética dessas notas lidas. 
*/

// Simulação da leitura do número de alunos em uma turma
var numeroAlunos = 5; // Valor fixo para o número de alunos

// Array para armazenar as notas dos alunos
var notas = [8, 7.5, 9, 6, 7.2]; // Valores fixos simulados para as notas

// Verifica se o número de alunos é válido
if (numeroAlunos <= 0) {
    console.log("O número de alunos deve ser maior que zero.");
} else {
    // Inicializa a soma das notas
    var somaNotas = 0;

    // Loop para somar as notas dos alunos
    for (var i = 0; i < numeroAlunos; i++) {
        somaNotas += notas[i];
    }

    // Calcula a média aritmética das notas
    var mediaNotas = somaNotas / numeroAlunos;

    // Imprime a média aritmética das notas
    console.log("A média aritmética das notas dos " + numeroAlunos + " alunos é: " + mediaNotas.toFixed(2));
}
