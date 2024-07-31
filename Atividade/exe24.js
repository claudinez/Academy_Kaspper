/*
Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e 
escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'
*/

// Lê o número da conta do cliente
var numeroConta = 12345;

// Lê o saldo
var saldo = 1000.00;

// Lê o débito
var debito = 200.00;

// Lê o crédito
var credito = 500.00;

// Calcula o saldo atual
var saldoAtual = saldo - debito + credito;

// Escreve o saldo atual na tela
console.log("O saldo atual é: R$ " + saldoAtual.toFixed(2));

// Verifica se o saldo atual é positivo ou negativo
if (saldoAtual >= 0) {
    console.log("Saldo Positivo");
} else {
    console.log("Saldo Negativo");
}
