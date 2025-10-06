function calcularComissao(valor, percComissao) {
    let valorComissao = valor * (percComissao / 100)
    return valorComissao
    let teste = "teste"
}

let comissaoRetornada;
comissaoRetornada = calcularComissao(2500, 5);

let salario = 3000;
salario = salario + comissaoRetornada;
console.log(`O salário final é de R$${salario},00`);