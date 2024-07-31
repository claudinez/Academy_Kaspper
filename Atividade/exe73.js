/*
73)	A prefeitura de uma cidade deseja fazer uma pesquisa entre seus habitantes. Faça um algoritmos para coletar dados sobre o salário e número de filhos de cada habitante e após as leituras, escrever: a) Média de salário da população 
b)	Média do número de filhos 
c)	Maior salário dos habitantes 
d)	Percentual de pessoas com salário menor que R$ 150,00 
Obs.: O final da leituras dos dados se dará com a entrada de um “salário negativo”. 
*/

var salarios = [300, 150, 400, 800, 1000, 600, 450, 250, 700, 140];
var numerosDeFilhos = [2, 1, 3, 0, 4, 2, 2, 1, 3, 1];
var totalSalarios = 0;
var totalFilhos = 0;
var maiorSalario = 0;
var salariosMenor150 = 0;
var numHabitantes = salarios.length;

// Loop para processar os dados
for (var i = 0; i < numHabitantes; i++) {
    var salario = salarios[i];
    var filhos = numerosDeFilhos[i];

    // Verifica se o salário é negativo para terminar a leitura
    if (salario < 0) {
        break;
    }

    // Acumula o total de salários e número de filhos
    totalSalarios += salario;
    totalFilhos += filhos;

    // Atualiza o maior salário
    if (salario > maiorSalario) {
        maiorSalario = salario;
    }

    // Conta quantas pessoas têm salário menor que R$ 150,00
    if (salario < 150) {
        salariosMenor150++;
    }
}

// Calcula a média de salário e de número de filhos
var mediaSalarios = totalSalarios / numHabitantes;
var mediaFilhos = totalFilhos / numHabitantes;

// Calcula o percentual de pessoas com salário menor que R$ 150,00
var percentualMenor150 = (salariosMenor150 / numHabitantes) * 100;

// Exibe os resultados
console.log("Média de salário da população: R$ " + mediaSalarios.toFixed(2));
console.log("Média do número de filhos: " + mediaFilhos.toFixed(2));
console.log("Maior salário dos habitantes: R$ " + maiorSalario.toFixed(2));
console.log("Percentual de pessoas com salário menor que R$ 150,00: " + percentualMenor150.toFixed(2) + "%");
