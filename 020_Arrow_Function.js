//Função nomeada
function saudacao(nome) {
    console.log(`Tenha um bom dia ${nome}!`);
}
//Função Anônima
const saudacaoAnonima = function (nome) {
    console.log(`Tenha um bom dia ${nome}!`);
}
//Função Arrow Function
const saudacaoArrow = (nome) => {
    console.log(`Tenha um bom dia ${nome}!`);
}
saudacaoArrow("João");

const soma = (v1, v2) => {
    return v1 + v2;
}

console.log((v1, v2) => v1 + v2);
