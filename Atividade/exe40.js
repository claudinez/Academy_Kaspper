/*
40)	Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total a pagar (total a pagar = total - desconto), sabendo-se que: 
-	Se quantidade  <= 5  o desconto será de 2% 
-	Se quantidade  > 5  e  quantidade  <=10  o desconto será de 3% 
-	Se quantidade  >  10 o desconto será de 5% 

*/

// Ler a descrição do produto
var descricaoProduto = "Sabão em pó";

// Ler a quantidade adquirida
var quantidade = 12;

// Ler o preço unitário
var precoUnitario = 50;

// Calcular o total
var total = quantidade * precoUnitario;

// Calcular o desconto
var desconto = 0;

if (quantidade <= 5) {
    desconto = total * 0.02;
} else if (quantidade > 5 && quantidade <= 10) {
    desconto = total * 0.03;
} else if (quantidade > 10) {
    desconto = total * 0.05;
}

// Calcular o total a pagar
var totalAPagar = total - desconto;

// Escrever os resultados na tela
console.log("Descrição do Produto: " + descricaoProduto);
console.log("Quantidade Adquirida: " + quantidade);
console.log("Preço Unitário: R$ " + precoUnitario.toFixed(2));
console.log("Total: R$ " + total.toFixed(2));
console.log("Desconto: R$ " + desconto.toFixed(2));
console.log("Total a Pagar: R$ " + totalAPagar.toFixed(2));
