/*
Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que 
fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo e escrever o conceito
do aluno de acordo com a tabela de conceitos mais abaixo: 
                                  N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios 
Média_de_Aproveitamento  = 	--------------------------------------------------------- 
                                                    7 
A atribuição de conceitos obedece a tabela abaixo: 

Média de Aproveitamento 	Conceito 
> =  9,0  	                A 
> =  7,5  e  <  9,0 	    B 
> =  6,0  e  <  7,5 	    C 
<  6,0                  	D 
*/

// Ler as notas obtidas nas 3 verificações
var nota1 = 8.0;
var nota2 = 7.5;
var nota3 = 9.0;

// Ler a média dos exercícios
var mediaExercicios = 8.5;

// Calcular a média de aproveitamento
var mediaAproveitamento = (nota1 + (nota2 * 2) + (nota3 * 3) + mediaExercicios) / 7;

// Determinar o conceito
var conceito;
if (mediaAproveitamento >= 9.0) {
    conceito = "A";
} else if (mediaAproveitamento >= 7.5 && mediaAproveitamento < 9.0) {
    conceito = "B";
} else if (mediaAproveitamento >= 6.0 && mediaAproveitamento < 7.5) {
    conceito = "C";
} else {
    conceito = "D";
}

// Escrever a média de aproveitamento e o conceito na tela
console.log("Média de Aproveitamento: " + mediaAproveitamento.toFixed(2));
console.log("Conceito: " + conceito);
