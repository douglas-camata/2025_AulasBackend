const fs = require('fs');

const pessoa = {
    nome: 'Douglas',
    idade: 37,
    hobbies: ['programar', 'viajar', 'correr']
}

//Convertendo um objeto JavaScript para JSON
const json = JSON.stringify(pessoa);

//Gravando o arquivo JSON
fs.writeFileSync('./026.json', json);