/*
7)	Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, 
nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores
*/

// Lê o número total de eleitores do município
var totalEleitores = 50000;

// Lê o número de votos brancos
var votosBrancos = 5000;

// Lê o número de votos nulos
var votosNulos = 1000;

// Lê o número de votos válidos
var votosValidos = totalEleitores - (votosBrancos+votosNulos);

// Calcula os percentuais
var percentualBrancos = (votosBrancos / totalEleitores) * 100;
var percentualNulos = (votosNulos / totalEleitores) * 100;
var percentualValidos = (votosValidos / totalEleitores) * 100;

// Escreve os percentuais na tela
console.log("Percentual de votos brancos: " + percentualBrancos.toFixed(2) + "%");
console.log("Percentual de votos nulos: " + percentualNulos.toFixed(2) + "%");
console.log("Percentual de votos válidos: " + percentualValidos.toFixed(2) + "%");
console.log("Total Eleitores: ",totalEleitores);
