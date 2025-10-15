const funcoesConversoes = require('./023_ModuloConversoes')

const resultado_fahrenheit = funcoesConversoes.celcius_para_fahrenheit(10);
const {valorCelsius, total} = resultado_fahrenheit;
console.log(`O valor em graus celsius é de ${valorCelsius}C° e em fahrenheit foi de ${total}.`);


const resultado_milhas = funcoesConversoes.quilometros_para_milhas(5);
const {valorKm, totalMilhas} = resultado_milhas;
console.log(`O valor em quilômetros é de ${valorKm}km e em milhas foi de ${totalMilhas}.`);