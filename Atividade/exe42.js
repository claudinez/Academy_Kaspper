/*
42)	Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. 
Para estar em condições, um dos seguintes requisitos deve ser satisfeito: 
-	Ter no mínimo 65 anos de idade. 
-	Ter trabalhado no mínimo 30 anos. 
-	Ter no mínimo 60 anos  e  ter trabalhado no mínimo 25 anos. 
Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), 
o ano de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o 
tempo de trabalho do empregado e a mensagem 'Requerer aposentadoria'  ou  'Não requerer'. 
*/

// Ler o número do empregado (código)
var codigoEmpregado = 12345;

// Ler o ano de nascimento do empregado
var anoNascimento = 1959;

// Ler o ano de ingresso na empresa
var anoIngresso = 1990;

// Obter o ano atual
var anoAtual = 2024;

// Calcular a idade do empregado
var idade = anoAtual - anoNascimento;

// Calcular o tempo de trabalho do empregado
var tempoTrabalho = anoAtual - anoIngresso;

// Verificar se o empregado está qualificado para a aposentadoria
var qualificadoParaAposentadoria = false;

if (idade >= 65) {
    qualificadoParaAposentadoria = true;
} else if (tempoTrabalho >= 30) {
    qualificadoParaAposentadoria = true;
} else if (idade >= 60 && tempoTrabalho >= 25) {
    qualificadoParaAposentadoria = true;
}

// Escrever a idade e o tempo de trabalho do empregado
console.log("Código do Empregado: " + codigoEmpregado);
console.log("Idade: " + idade);
console.log("Tempo de Trabalho: " + tempoTrabalho);

// Escrever a mensagem de qualificação para aposentadoria
if (qualificadoParaAposentadoria) {
    console.log("Requerer aposentadoria");
} else {
    console.log("Não requerer");
}
