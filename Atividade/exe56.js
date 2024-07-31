/*
Ler um valor inteiro (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido. 
*/


// Lê um valor inteiro entre 1 e 10
var valor = 2;
do {
    if (valor < 1 || valor > 10 || isNaN(valor)) {
        console.log("Valor inválido. Digite um valor entre 1 e 10.");
    }
} while (valor < 1 || valor > 10 || isNaN(valor));

// Imprime a tabuada do valor lido
console.log(`Tabuada do ${valor}:`);
for (let i = 1; i <= 10; i++) {
    console.log(`${valor} x ${i} = ${valor * i}`);
}
