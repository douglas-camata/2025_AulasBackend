//Importando o módulo 'fs' para ler arquivos
const fs = require('fs');

//Lendo o arquivo JSON
const dados = fs.readFileSync('./024_JSON.json', 'utf8');

//Convertendo JSON para um objeto JavaScript utilizando JSON.parse
const pessoa = JSON.parse(dados);
console.log(pessoa); 
console.log(pessoa.nome);

