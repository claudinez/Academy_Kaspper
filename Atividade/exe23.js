/*
Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele recebe
 uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor,
 calcular e escrever o seu salário total
 */

 
/*
Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que ele recebe
uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que ultrapassar este valor,
calcular e escrever o seu salário total.
*/

// Lê o salário fixo
var salarioFixo = 3000;

// Lê o valor das vendas efetuadas
var valorVendas = 50;

// Inicializa a comissão
var comissao = 0;

// Calcula a comissão
if (valorVendas <= 1500) {
    comissao = valorVendas * 0.03;
} else {
    comissao = (1500 * 0.03) + ((valorVendas - 1500) * 0.05);
}

// Calcula o salário total
var salarioTotal = salarioFixo + comissao;

// Escreve o salário total na tela
console.log("O salário total é: R$ " + salarioTotal.toFixed(2));
