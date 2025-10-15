//Importando o módulo criado, o nome pode ser qualquer um
const funcoesJuros = require('./027_Modulo_Juros');

//Utilizando a função juros_simples do módulo
const resultadoJurosSimples = funcoesJuros.juros_simples(800, 3, 36);
console.log(resultadoJurosSimples);

//Utilizando a função juros_composto do módulo
const resJurosComposto = funcoesJuros.juros_composto(500, 4, 24);
//Desestruturando o objeto de retorno da função
const {juros, total} = resJurosComposto;

console.log(`Juros foi R$${juros} e o total foi R$${total}`);

