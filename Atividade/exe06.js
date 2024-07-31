/*
6)	Faça um algoritmo que leia a idade de uma pessoa expressa em anos, 
meses e dias e escreva a idade dessa pessoa expressa apenas em dias. 
Considerar ano com 365 dias e mês com 30 dias. 
*/

// declaração de variaveis
var anos = 48;
var meses = 7;
var dias = 26;

//calcular os dias por ano e mês
var diasPorAno = 365;
var diasPorMes = 30;

//calcular a idade em dias
var idadeEmDias = (anos*diasPorAno)+(meses * diasPorMes) + dias;

console.log("Você já viveu ", idadeEmDias, "dias");