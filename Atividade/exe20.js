/*
Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) 
e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o 
jogo pode iniciar em um dia e terminar no dia seguinte
*/

// Horas de exemplo
var horaInicio = 22;  //  hora de início
var horaFim = 2;      //  hora de fim

// Calcula a duração do jogo
var duracao;
if (horaFim >= horaInicio) {
    // Se o jogo terminou no mesmo dia
    duracao = horaFim - horaInicio;
} else {
    // Se o jogo terminou no dia seguinte
    duracao = (24 - horaInicio) + horaFim;
}

// Escreve a duração do jogo na tela
console.log("A duração do jogo é de: " + duracao + " horas");
