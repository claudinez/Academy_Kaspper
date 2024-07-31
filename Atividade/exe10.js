/*
10)	Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, 
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas.
 Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, 
 o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor. 
 */

// Número de carros vendidos pelo vendedor
var carrosVendidos = 10;  

// Valor total das vendas do vendedor
var valorTotalVendas = 200000.00;  

// Salário fixo do vendedor
var salarioFixo = 3000.00;  

// Valor da comissão por carro vendido
var valorPorCarroVendido = 500.00;  

// Calcula o valor da comissão fixa pelos carros vendidos
var comissaoFixa = carrosVendidos * valorPorCarroVendido;

// Calcula o valor da comissão variável (5% do valor total das vendas)
var comissaoVariavel = valorTotalVendas * 0.05;

// Calcula o salário final do vendedor
var salarioFinal = salarioFixo + comissaoFixa + comissaoVariavel;

// Escreve o salário final na tela
console.log("O salário final do vendedor é: R$ " + salarioFinal.toFixed(2));
