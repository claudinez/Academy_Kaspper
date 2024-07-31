/*
As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas
pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da
compra. 
*/

// Número de maçãs compradas
var numMacas = 10;  

// Define os preços das maçãs
var precoMenosDeUmaDuzida = 1.30;
var precoPeloMenosUmaDuzida = 1.00;

// Calcula o custo total da compra
var custoTotal;

if (numMacas < 12) {
    custoTotal = numMacas * precoMenosDeUmaDuzida;
} else {
    custoTotal = numMacas * precoPeloMenosUmaDuzida;
}

// Escreve o custo total da compra na tela
console.log("O custo total da compra é: R$ " + custoTotal.toFixed(2));
