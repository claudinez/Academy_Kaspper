/*
35)	Um posto está vendendo combustíveis com a seguinte tabela de descontos: 
Álcool 	até 20 litros, desconto de 3% por litro acima de 20 litros, desconto de 5% por litro 
Gasolina até 20 litros, desconto de 4% por litro acima de 20 litros, desconto de 6% por litro 
Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível 
(codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo 
cliente sabendo-se que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. 
*/

// Preço dos combustíveis
var precoGasolina = 3.30;
var precoAlcool = 2.90;

// Lê o número de litros vendidos
var litrosVendidos = 25;  

// Lê o tipo de combustível (A para álcool, G para gasolina)
var tipoCombustivel = 'G';  

// Inicializa a variável para armazenar o preço final
var precoFinal = 0;

// Calcula o valor a ser pago com base no tipo de combustível e na quantidade vendida
if (tipoCombustivel === 'A') {
    if (litrosVendidos <= 20) {
        precoFinal = litrosVendidos * precoAlcool * (1 - 0.03);
    } else {
        precoFinal = litrosVendidos * precoAlcool * (1 - 0.05);
    }
} else if (tipoCombustivel === 'G') {
    if (litrosVendidos <= 20) {
        precoFinal = litrosVendidos * precoGasolina * (1 - 0.04);
    } else {
        precoFinal = litrosVendidos * precoGasolina * (1 - 0.06);
    }
} else {
    console.log("Tipo de combustível inválido");
}

// Escreve o valor a ser pago na tela
console.log("O valor a ser pago é: R$ " + precoFinal.toFixed(2));

