/*
22)	Para o enunciado a seguir foi elaborado um algoritmo em Português Estruturado que contém erros, identifique os erros no algoritmo apresentado abaixo: 
Enunciado: Tendo como dados de entrada o nome, a altura e o sexo (M ou F) de uma pessoa, calcule e mostre seu peso ideal, utilizando as seguintes fórmulas: 
-	para sexo masculino:  peso ideal = (72.7 * altura) - 58 
-	para sexo feminino:  peso ideal = (62.1 * altura) - 44.7 
 
inicio ler nome ler sexo se sexo = M então peso_ideal  (72.7 * altura) - 58 
senão peso_ideal  (62.1 * altura) – 44.7 
	 	fim_se 
escrever  peso_ideal 
fim 
*/
//declaraçao de variavel
let nome, altura, sexo, peso_ideal;

// Exemplo de dados de entrada
nome = "João";  // Nome da pessoa
altura = 1.75;  // Altura em metros
sexo = 'M';     // Sexo ('M' para masculino, 'F' para feminino)

if (sexo === 'M') {
    peso_ideal = (72.7 * altura) - 58;
} else if (sexo === 'F') {
    peso_ideal = (62.1 * altura) - 44.7;
} else {
    peso_ideal = "Sexo inválido";  // Tratamento para valores inesperados de sexo
}

console.log("Nome: " + nome + ", Sexo: " + sexo + ", Altura: " + altura + " => Peso Ideal: " + peso_ideal.toFixed(2));
