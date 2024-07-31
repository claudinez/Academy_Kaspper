/*
Ler 10 valores e escrever quantos desses valores lidos estão no intervalo [10,20] 
(inlcuindo os valores 10 e 20 no intervalo) e quantos deles estão fora deste intervalo.
*/

// Valores simulados para teste
var valores = [5, 12, 25, 18, 9, 10, 20, 7, 14, 30];

// Inicializa os contadores
var dentroIntervalo = 0;
var foraIntervalo = 0;

// Loop para verificar cada valor
for (var i = 0; i < 10; i++) {
    var valor = valores[i];
    
    if (valor >= 10 && valor <= 20) {
        dentroIntervalo++;
    } else {
        foraIntervalo++;
    }
}

// Imprime os resultados
console.log(`Quantidade de valores dentro do intervalo [10, 20]: ${dentroIntervalo}`);
console.log(`Quantidade de valores fora do intervalo [10, 20]: ${foraIntervalo}`);
