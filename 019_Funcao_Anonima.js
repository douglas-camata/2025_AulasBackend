//Função Nomeada
function saudacao(nome) {
    console.log(`Tenha um bom dia ${nome}!`);
}
saudacao("João");

//Função Anônima
const saudacaoAnonima = function (nome) {
    console.log(`Tenha um bom dia ${nome}!`);
}
saudacaoAnonima("Maria");


function soma(v1, v2) {
    console.log(v1 + v2);    
}
soma(4, 8);

const soma2 = function (v1, v2) {
    console.log(v1 + v2);    
}