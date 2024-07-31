/*
Escreva um algoritmo para ler 10 números. Todos os números lidos com valor inferior a 40 devem ser somados. 
Escreva o valor final da soma efetuada. 
*/

// Simulação da leitura de 10 números
var numeros = [12, 45, 37, 22, 9, 50, 18, 34, 41, 29]; 

// Inicializa a soma dos números inferiores a 40
var somaInferiorA40 = 0;

// Loop para somar os números inferiores a 40
for (var i = 0; i < 10; i++) {
    if (numeros[i] < 40) {
        somaInferiorA40 += numeros[i];
    }
}

// Imprime o valor final da soma efetuada
console.log("A soma dos números inferiores a 40 é: " + somaInferiorA40);
