/*
31)	Ler o nome de 2 times e o número de gols marcados na partida (para cada time). 
Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE
*/

// Lê os nomes dos times
var time1 = "Time A";
var time2 = "Time B";

// Lê o número de gols marcados na partida para cada time
var golsTime1 = 2;
var golsTime2 = 2;

// Verifica qual time é o vencedor ou se houve empate
if (golsTime1 > golsTime2) {
    console.log("O vencedor é: " + time1);
} else if (golsTime2 > golsTime1) {
    console.log("O vencedor é: " + time2);
} else {
    console.log("EMPATE");
}
