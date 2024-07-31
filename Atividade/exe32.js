/*
Ler dois valores e imprimir uma das três mensagens a seguir: 
‘Números iguais’, caso os números sejam iguais 
‘Primeiro é maior’, caso o primeiro seja maior que o segundo; ‘Segundo maior’, caso o segundo
seja maior que o primeiro.  
*/

// Lê dois valores
var valor1 = 10;
var valor2 = 20;

// Compara os valores e imprime a mensagem correspondente
if (valor1 === valor2) {
    console.log("Números iguais");
} else if (valor1 > valor2) {
    console.log("Primeiro é maior");
} else {
    console.log("Segundo maior");
}
