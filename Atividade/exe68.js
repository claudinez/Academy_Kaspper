/*
Uma loja está levantando o valor total de todas as mercadorias em estoque.
 Escreva um algoritmo que permita a entrada das seguintes informações: 
 a) o número total de mercadorias no estoque; 
 b) o valor de cada mercadoria. Ao final imprimir o valor total em estoque
 e a média de valor das mercadorias
 */

 // Definindo o número total de mercadorias no estoque
var totalMercadorias = 5; 

// Inicializa o valor total em estoque e o contador de mercadorias
var valorTotal = 0;
var valorMercadoria;

// Loop para ler o valor de cada mercadoria e somá-los ao valor total
for (var i = 0; i < totalMercadorias; i++) {
    // Supondo valores fixos para cada mercadoria
    valorMercadoria = (i + 1) * 10; // Simulação de valores para cada mercadoria
    console.log("Valor da mercadoria " + (i + 1) + ": " + valorMercadoria);
    valorTotal += valorMercadoria;
}

// Calcula a média de valor das mercadorias
var mediaValor = valorTotal / totalMercadorias;

// Imprime o valor total em estoque e a média de valor das mercadorias
console.log("Valor total em estoque: " + valorTotal.toFixed(2));
console.log("Média de valor das mercadorias: " + mediaValor.toFixed(2));
