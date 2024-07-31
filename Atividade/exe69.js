/*
O mesmo exercício anterior, mas agora não será informado o número de mercadorias em estoque. 
Então o funcionamento deverá ser da seguinte forma: ler o valor da mercadoria e perguntar
‘MAIS MERCADORIAS (S/N)?’. Ao final, imprimir o valor total em estoque e a média de valor das
 mercadorias em estoque. 
 */

 var valorMercadoria;
 var valorTotal = 0;
 var contador = 0;
 var maisMercadorias;
 
 // Loop para ler o valor de cada mercadoria e perguntar se há mais mercadorias
 do {
     // Supondo um valor fixo para cada mercadoria na simulação
     valorMercadoria = (contador + 1) * 10; // Simulação de valores para cada mercadoria
     console.log("Valor da mercadoria " + (contador + 1) + ": " + valorMercadoria);
     valorTotal += valorMercadoria;
     contador++;
 
     // Supondo a resposta fixa para mais mercadorias
     maisMercadorias = (contador < 5) ? 'S' : 'N'; // Simulação de resposta 'S' ou 'N'
     console.log("MAIS MERCADORIAS (S/N)? " + maisMercadorias);
 } while (maisMercadorias === 'S');
 
 // Calcula a média de valor das mercadorias
 var mediaValor = valorTotal / contador;
 
 // Imprime o valor total em estoque e a média de valor das mercadorias
 console.log("Valor total em estoque: " + valorTotal.toFixed(2));
 console.log("Média de valor das mercadorias: " + mediaValor.toFixed(2));
 