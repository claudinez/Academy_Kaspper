/*
Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor
correspondente  em graus Celsius (baseado na fórmula abaixo): 
*/

// Temperatura em graus Fahrenheit
var fahrenheit = 98.6;  

// Calcula a temperatura em graus Celsius
var celsius = (fahrenheit - 32) * (5 / 9);

// Escreve o valor correspondente em graus Celsius na tela
console.log("A temperatura em graus Celsius é: " + celsius.toFixed(2) + "°C");

// Converte de volta para Fahrenheit
var fahrenheitConvertido = celsius * (9 / 5) + 32;

// Escreve o valor correspondente em graus Fahrenheit na tela
console.log("A temperatura convertida de volta em graus Fahrenheit é: " + fahrenheitConvertido.toFixed(2) + "°F");
