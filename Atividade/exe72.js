/*
Faça um algoritmo para ler o código e o preço de 15 produtos, calcular e escrever: 
-	o maior preço lido 
-	a média aritmética dos preços dos produtos 
*/

// Inicializa variáveis
var produtos = [
    { codigo: 1, preco: 10.0 },
    { codigo: 2, preco: 20.0 },
    { codigo: 3, preco: 30.0 },
    { codigo: 4, preco: 40.0 },
    { codigo: 5, preco: 50.0 },
    { codigo: 6, preco: 60.0 },
    { codigo: 7, preco: 70.0 },
    { codigo: 8, preco: 80.0 },
    { codigo: 9, preco: 90.0 },
    { codigo: 10, preco: 100.0 },
    { codigo: 11, preco: 110.0 },
    { codigo: 12, preco: 120.0 },
    { codigo: 13, preco: 130.0 },
    { codigo: 14, preco: 140.0 },
    { codigo: 15, preco: 150.0 }
];

var somaPrecos = 0;
var maiorPreco = produtos[0].preco;

// Loop para calcular a soma dos preços e encontrar o maior preço
for (var i = 0; i < produtos.length; i++) {
    var preco = produtos[i].preco;
    somaPrecos += preco;

    if (preco > maiorPreco) {
        maiorPreco = preco;
    }
}

// Calcula a média dos preços
var mediaPrecos = somaPrecos / produtos.length;

// Exibe o maior preço e a média dos preços
console.log("Maior preço lido: " + maiorPreco.toFixed(2));
console.log("Média dos preços dos produtos: " + mediaPrecos.toFixed(2));
