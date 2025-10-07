let produto = {
    nome: "Celular",
    preco: 2000, 
    marca: "Samsung",
    quebrado: false
}

// Exibindo todos os dados do objeto
console.log(produto);
console.log(produto.nome); //Celular
console.log(produto.marca); //Samsung
console.log(produto.modelo); //undefined

console.log(produto['nome']); //Celular

produto.preco = 1900;
console.log(produto);
produto.modelo = 'Galaxy S24';
console.log(produto);   

//Iterando sobre as chaves do objeto utilizando o for
for (let chave in produto){
    console.log(`Chave: ${chave} seu valor é ${produto[chave]}`);
}

let aluno = {
    nome: "Joquim",
    sexo: 'M',
    idade: 16,
    dados_mae: {
        nome: "Maria",
        telefone: '18 999999999'
    },
    boletim: [
        {materia: "Português", nota: 10, faltas: 6},
        {materia: "Matemática", nota: 8, faltas: 3}
    ]
}
console.log(aluno);
console.log(aluno.dados_mae.telefone);
console.log(aluno.boletim[1].nota);


