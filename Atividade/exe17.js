/*
Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não 
votar este ano (não é necessário considerar o mês em que a pessoa nasceu).
*/

// Ano atual
var anoAtual = 2024;  

// Ano de nascimento
var anoNascimento = 2005;  

// Calcula a idade da pessoa
var idade = anoAtual - anoNascimento;

// Verifica se a pessoa pode votar
if (idade >= 18) {
    console.log("Você pode votar este ano.");
} else {
    console.log("Você não pode votar este ano.");
}
