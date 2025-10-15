let funcionario = {
    nome : "Reinaldo", 
    salario : 5000.00,
    idade : 40, 
    setor : "RH",
}

//Atribuindo à variaveis os valores das propriedades do objeto
//let salario = funcionario.salario;
//let nome = funcionario.nome;
//let idade = funcionario.idade;
//let setor = funcionario.setor;

//Desestruturando o objeto
//Declarando e atribuindo os valores automaticamente do objeto
let { salario, nome, idade, setor } = funcionario;
console.log(salario);
console.log(nome);
