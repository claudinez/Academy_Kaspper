/*
Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
Calcular e escrever o valor do novo salário. 
*/

// Salário mensal atual do funcionário
var salarioAtual = 3000.00;  

// Percentual de reajuste
var percentualReajuste = 10;  

// Calcula o valor do novo salário
//var novoSalario = salarioAtual + (salarioAtual * (percentualReajuste / 100));
var novoSalario = ((salarioAtual * percentualReajuste)/100)+salarioAtual;

// Escreve o valor do novo salário na tela
console.log("O valor do novo salário é: R$ " + novoSalario.toFixed(2));