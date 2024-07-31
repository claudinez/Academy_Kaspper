/*
33)	Seja o seguinte algoritmo: 
início ler x ler y z  (x*y) + 5 se z <= 0 então resposta  ‘A’ 
senão se z <= 100 então resposta  ‘B’ 
senão resposta  ‘C’   	fim_se  	fim_se 
escrever  z, resposta 
fim 
Faça um teste de mesa e complete o quadro a seguir para os seguintes valores: 
		Variávei	s 
X 	Y 	Z 	Resposta 
3 	2 	 11	 B
150 	3 	 455	 C
7 	-1 	 -2	 A
-2 	5 	 -5	 A
50 	3 	 155	 C
*/

//declaração de variavel
let x, y, z, resposta;

// Exemplo de valores das variáveis para teste de mesa
x = 3; y = 2; z = (x * y) + 5;

if (z <= 0) {
    resposta = 'A';
} else if (z <= 100) {
    resposta = 'B';
} else {
    resposta = 'C';
}

console.log("x: " + x + ", y: " + y + ", z: " + z + " => Resposta: " + resposta);

// Teste de mesa
x = 150; y = 3; z = (x * y) + 5;
if (z <= 0) {
    resposta = 'A';
} else if (z <= 100) {
    resposta = 'B';
} else {
    resposta = 'C';
}
console.log("x: " + x + ", y: " + y + ", z: " + z + " => Resposta: " + resposta);

x = 7; y = -1; z = (x * y) + 5;
if (z <= 0) {
    resposta = 'A';
} else if (z <= 100) {
    resposta = 'B';
} else {
    resposta = 'C';
}
console.log("x: " + x + ", y: " + y + ", z: " + z + " => Resposta: " + resposta);

x = -2; y = 5; z = (x * y) + 5;
if (z <= 0) {
    resposta = 'A';
} else if (z <= 100) {
    resposta = 'B';
} else {
    resposta = 'C';
}
console.log("x: " + x + ", y: " + y + ", z: " + z + " => Resposta: " + resposta);

x = 50; y = 3; z = (x * y) + 5;
if (z <= 0) {
    resposta = 'A';
} else if (z <= 100) {
    resposta = 'B';
} else {
    resposta = 'C';
}
console.log("x: " + x + ", y: " + y + ", z: " + z + " => Resposta: " + resposta);
