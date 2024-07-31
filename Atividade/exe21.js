/*
A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas 
receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que
 leia o número de horas trabalhadas em um mês, o salário por hora e escreva o salário total do funcionário, 
 que deverá ser acrescido das horas extras, caso tenham sido trabalhadas 
 (considere que o mês possua 4 semanas exatas). 
 */

 // Valores de exemplo
var horasTrabalhadas = 180;  // horas trabalhadas no mês
var salarioPorHora = 25;     // salário por hora

// Define a jornada de trabalho semanal e mensal
var horasPorSemana = 40;
var semanasPorMes = 4;
var horasTrabalhoMensal = horasPorSemana * semanasPorMes;

// Calcula o salário total
var salarioTotal;
if (horasTrabalhadas > horasTrabalhoMensal) {
    var horasExtras = horasTrabalhadas - horasTrabalhoMensal;
    var salarioHorasNormais = horasTrabalhoMensal * salarioPorHora;
    var salarioHorasExtras = horasExtras * salarioPorHora * 1.5;
    salarioTotal = salarioHorasNormais + salarioHorasExtras;
} else {
    salarioTotal = horasTrabalhadas * salarioPorHora;
}

// Escreve o salário total na tela
console.log("O salário total do funcionário é: R$ " + salarioTotal.toFixed(2));
