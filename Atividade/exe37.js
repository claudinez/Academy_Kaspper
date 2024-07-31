/*
Uma fruteira está vendendo frutas com a seguinte tabela de preços: 
               Até 5 Kg 	Acima de 5 Kg 
Morango 	R$ 2,50 por Kg 	R$ 2,20 por Kg 
Maçã 	    R$ 1,80 por Kg 	R$ 1,50 por Kg 
Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, 
receberá ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) 
de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. 
*/

// Lê a quantidade de morangos e maçãs adquiridas
var kgMorango = 4;  
var kgMaca = 6;     

// Inicializa os preços por Kg
var precoMorangoAte5Kg = 2.50;
var precoMorangoAcima5Kg = 2.20;
var precoMacaAte5Kg = 1.80;
var precoMacaAcima5Kg = 1.50;

// Calcula o custo dos morangos
var custoMorango = 0;
if (kgMorango <= 5) {
    custoMorango = kgMorango * precoMorangoAte5Kg;
} else {
    custoMorango = kgMorango * precoMorangoAcima5Kg;
}

// Calcula o custo das maçãs
var custoMaca = 0;
if (kgMaca <= 5) {
    custoMaca = kgMaca * precoMacaAte5Kg;
} else {
    custoMaca = kgMaca * precoMacaAcima5Kg;
}

// Calcula o custo total
var custoTotal = custoMorango + custoMaca;

// Aplica desconto se necessário
if (kgMorango + kgMaca > 8 || custoTotal > 25) {
    custoTotal = custoTotal * 0.90;
}

// Escreve o valor a ser pago pelo cliente
console.log("O valor a ser pago pelo cliente é: R$ " + custoTotal.toFixed(2));
