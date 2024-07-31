/*
Acrescente uma mensagem 'NOVO CÁLCULO (S/N)?' ao final do exercício [48]. 
Se for respondido 'S' deve retornar e executar um novo cálculo, caso contrário deverá encerrar 
o algoritmo
*/


var novoCalculo;

do {
    // Declaração das notas
    var nota1;
    var nota2;

    // Lê a nota da 1ª avaliação
    do {
        nota1 = parseFloat("Digite a nota da 1ª avaliação (0 a 10): ");
        if (nota1 < 0 || nota1 > 10 || isNaN(nota1)) {
            console.log("Nota inválida. Digite uma nota entre 0 e 10.");
        }
    } while (nota1 < 0 || nota1 > 10 || isNaN(nota1));

    // Lê a nota da 2ª avaliação
    do {
        nota2 = parseFloat("Digite a nota da 2ª avaliação (0 a 10): ");
        if (nota2 < 0 || nota2 > 10 || isNaN(nota2)) {
            console.log("Nota inválida. Digite uma nota entre 0 e 10.");
        }
    } while (nota2 < 0 || nota2 > 10 || isNaN(nota2));

    // Calcula a média simples
    var media = (nota1 + nota2) / 2;

    // Imprime a média
    console.log("A média do aluno é: " + media.toFixed(2));

    // Pergunta se deseja fazer um novo cálculo
    novoCalculo = ("NOVO CÁLCULO (S/N)? ").toUpperCase();
} while (novoCalculo === 'S');

console.log("Algoritmo encerrado.");
