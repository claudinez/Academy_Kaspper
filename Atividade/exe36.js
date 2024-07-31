/*
Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres
 (considere que as idades dos homens serão sempre diferentes entre si, bem como as das mulheres). 
 Calcule e escreva a soma das idades do homem mais velho com a mulher mais nova, 
 e o produto das idades do homem mais novo com a mulher mais velha. 
 */

// Idades dos homens
var idadeHomem1 = 45;  
var idadeHomem2 = 30;  

// Idades das mulheres
var idadeMulher1 = 25;  
var idadeMulher2 = 40;  

// Inicializa as variáveis para armazenar os homens mais velho e mais novo
var homemMaisVelho = 0;
var homemMaisNovo = 0;

// Inicializa as variáveis para armazenar as mulheres mais velha e mais nova
var mulherMaisVelha = 0;
var mulherMaisNova = 0;

// Determina o homem mais velho e o mais novo
if (idadeHomem1 > idadeHomem2) {
    homemMaisVelho = idadeHomem1;
    homemMaisNovo = idadeHomem2;
} else {
    homemMaisVelho = idadeHomem2;
    homemMaisNovo = idadeHomem1;
}

// Determina a mulher mais velha e a mais nova
if (idadeMulher1 > idadeMulher2) {
    mulherMaisVelha = idadeMulher1;
    mulherMaisNova = idadeMulher2;
} else {
    mulherMaisVelha = idadeMulher2;
    mulherMaisNova = idadeMulher1;
}

// Calcula a soma do homem mais velho com a mulher mais nova
var soma = homemMaisVelho + mulherMaisNova;

// Calcula o produto do homem mais novo com a mulher mais velha
var produto = homemMaisNovo * mulherMaisVelha;

// Escreve os resultados na tela
console.log("A soma das idades do homem mais velho com a mulher mais nova é: " + soma);
console.log("O produto das idades do homem mais novo com a mulher mais velha é: " + produto);
