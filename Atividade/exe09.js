/*
9)	O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor
 e dos impostos (aplicados ao custo de fábrica).  Supondo que o percentual do distribuidor seja de 28% e 
 os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever 
 o custo final ao consumidor. 
 */

 // Custo de fábrica do carro
var custoFabrica = 50000.00;  

// Define os percentuais fixos
var percentualDistribuidor = 28;
var percentualImpostos = 45;

// Calcula o valor do distribuidor
var valorDistribuidor = custoFabrica * (percentualDistribuidor / 100);

// Calcula o valor dos impostos
var valorImpostos = custoFabrica * (percentualImpostos / 100);

// Calcula o custo final ao consumidor
var custoFinal = custoFabrica + valorDistribuidor + valorImpostos;

// Escreve o custo final na tela
console.log("O custo final ao consumidor é: R$ " + custoFinal.toFixed(2));
