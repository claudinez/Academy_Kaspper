/*
Ler 10 valores e escrever quantos desses valores lidos são NEGATIVOS
*/

/*
Ler 10 valores e escrever quantos desses valores lidos são NEGATIVOS
*/

// Valores fixos para serem lidos
var valores = [5, -3, 2, -8, 0, 4, -1, -7, 9, 6];

// Inicializa o contador de valores negativos
var negativos = 0;

// Loop para ler 10 valores
for (var i = 0; i < 10; i++) {
    var valor = valores[i];
    
    // Verifica se o valor é negativo
    if (valor < 0) {
        negativos++;
    }
}

// Imprime a quantidade de valores negativos
console.log("Quantidade de valores negativos: " + negativos);
