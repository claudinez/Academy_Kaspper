/*
43)	Seja o seguinte algoritmo: 
inicio ler a, b, c se (a < b+c) e (b <a+c) e (c <a+b) então se (a=b) e (b=c) então mens  'Triângulo Equilátero' 
senão se (a=b) ou (b=c) ou (a=c) então mens  'Triângulo Isósceles' 
senão mens  'Triângulo Escaleno' 
 	 	 	fim_se  	 	fim_se 
senão mens  'Não e possível formar um triângulo' 
fim_se escrever mens 
fim 
Faça um teste de mesa e complete o quadro a seguir para os seguintes valores das variáveis: 
			Variáveis 	
a 	b 	C 	Mens 
1 	2 	3 	Não 	 
3 	4 	5 	Escaleno	 
2 	2 	4 	Não	 
4 	4 	4 	Equilátero	 
5 	3 	3 	Isósceles	 
*/

let a, b, c, mens;

// Exemplo de valores das variáveis
a = 1;
b = 2;
c = 3;

if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        mens = 'Triângulo Equilátero';
    } else if (a === b || b === c || a === c) {
        mens = 'Triângulo Isósceles';
    } else {
        mens = 'Triângulo Escaleno';
    }
} else {
    mens = 'Não é possível formar um triângulo';
}

console.log("a: " + a + ", b: " + b + ", c: " + c + " => " + mens);

// Teste de mesa
a = 3; b = 4; c = 5;
if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        mens = 'Triângulo Equilátero';
    } else if (a === b || b === c || a === c) {
        mens = 'Triângulo Isósceles';
    } else {
        mens = 'Triângulo Escaleno';
    }
} else {
    mens = 'Não é possível formar um triângulo';
}
console.log("a: " + a + ", b: " + b + ", c: " + c + " => " + mens);

a = 2; b = 2; c = 4;
if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        mens = 'Triângulo Equilátero';
    } else if (a === b || b === c || a === c) {
        mens = 'Triângulo Isósceles';
    } else {
        mens = 'Triângulo Escaleno';
    }
} else {
    mens = 'Não é possível formar um triângulo';
}
console.log("a: " + a + ", b: " + b + ", c: " + c + " => " + mens);

a = 4; b = 4; c = 4;
if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        mens = 'Triângulo Equilátero';
    } else if (a === b || b === c || a === c) {
        mens = 'Triângulo Isósceles';
    } else {
        mens = 'Triângulo Escaleno';
    }
} else {
    mens = 'Não é possível formar um triângulo';
}
console.log("a: " + a + ", b: " + b + ", c: " + c + " => " + mens);

a = 5; b = 3; c = 3;
if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        mens = 'Triângulo Equilátero';
    } else if (a === b || b === c || a === c) {
        mens = 'Triângulo Isósceles';
    } else {
        mens = 'Triângulo Escaleno';
    }
} else {
    mens = 'Não é possível formar um triângulo';
}
console.log("a: " + a + ", b: " + b + ", c: " + c + " => " + mens);
