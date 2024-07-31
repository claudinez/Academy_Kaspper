/*
39)	Para  A = V,  B = V  e  C = F,  qual o resultado da avaliação das seguintes expressões: 
*/

//declaração de variaveis
var A = true;
var B = true;
var C = false;

// (A e B) ou (A xou B)
var resultadoA = (A && B) || (A ^ B);
console.log("a) " + resultadoA);  // true

//  (A ou B) e (A e C)
var resultadoB = (A || B) && (A && C);
console.log("b) " + resultadoB);  // false

// A ou C e B x ou A e não B
var resultadoC = A || (C && (B ^ A) && !B);
console.log("c) " + resultadoC);  // true
