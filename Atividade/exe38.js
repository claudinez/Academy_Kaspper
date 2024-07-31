/*
Faça um algoritmo para ler um número que é um código de usuário. 
Caso este código seja diferente de um código armazenado internamente no algoritmo (igual a 1234) 
deve ser apresentada a mensagem ‘Usuário inválido!’. 
Caso o Código seja correto, deve ser lido outro valor que é a senha. 
Se esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. 
Caso a senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’. 
*/

// Código de usuário armazenado internamente
var codigoCorreto = 1234;

// Senha correta
var senhaCorreta = 9999;

// Lê o código do usuário
var codigoUsuario = 1234;  

// Verifica se o código do usuário está correto
if (codigoUsuario !== codigoCorreto) {
    console.log("Usuário inválido!");
} else {
    // Lê a senha do usuário
    var senhaUsuario = 9999;  

    // Verifica se a senha está correta
    if (senhaUsuario !== senhaCorreta) {
        console.log("Senha incorreta!");
    } else {
        console.log("Acesso permitido");
    }
}
