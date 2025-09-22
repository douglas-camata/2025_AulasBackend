const prompt = require('prompt-sync')();

let nome = prompt('Qual é o seu nome?');
console.log(`Seja bem-vindo(a), ${nome}!`);

let anoNascimento = prompt(`${nome}, em que ano você nasceu?`);
let idade = 2025 - parseInt(anoNascimento);

let fezAniversario = prompt('Você já fez aniversário esse ano? (s/n)');
if (fezAniversario != 's') {
    idade--;
}

console.log(`${nome}, você tem ${idade} anos.`);

