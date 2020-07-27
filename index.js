function Pessoa(nome, sobrenome, sexo, idade, cor) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.sexo = sexo
    this.idade = idade
    this.cor = cor
}
// funcao pessoa mais velha
function verificaMaisVelho(pessoas) {
    let maiorIdade;
    let pessoaMaisVelha;

    for (let pessoa of pessoas) {
        if (typeof maiorIdade == 'undefined') {
            maiorIdade = pessoa.idade
            pessoaMaisVelha = pessoa
        } else {
            if (pessoa.idade > maiorIdade) {
                maiorIdade = pessoa.idade
                pessoaMaisVelha = pessoa
            }
        }
    }

    return pessoaMaisVelha

}
//mostar os registros em detalhe
function listaRegistros(registros) {
    console.log('Esses são os registros que foram feitos:')
    registros.forEach( registro => {
        console.log(`${registro.nome} ${registro.sobrenome} tem ${registro.idade} anos e gosta da cor ${registro.cor}`)
    } )
}

let registros = []

while (true) {

    //pegando os dados
    let nome = (prompt("Nome da pessoa."))
    let sobrenome = (prompt("Sobrenome da pessoa."))
    let sexo = (prompt("Sexo da pessoa."))
    let idade = Number(prompt("Idade da pessoa."))
    let cor = (prompt("Cor favorito da pessoa."))
    //criando registros
    let pessoa = new Pessoa(nome, sobrenome, sexo, idade, cor)
    //guardando registros
    registros.push(pessoa)

    let resposta = prompt("Deseja registrar outra pessoa?")
    if (resposta == 'N' || resposta == 'n' || resposta == 'não' || resposta == 'Não' ) {
        break;
    } 
}

/* console.log(registros)
console.log(verificaMaisVelho(registros)) */
listaRegistros(registros)
let maisVelho = verificaMaisVelho(registros)
console.log(`A pessoa mais velha é ${maisVelho.nome} ${maisVelho.sobrenome} com ${maisVelho.idade} anos e gosta da cor ${maisVelho.cor}`)

/* alert("Primeira pessoa")
let nome = (prompt("Nome da primeira pessoa."))
let idade = Number(prompt("Idade da primeira pessoa."))
let cor = (prompt("Cor favorito da primeira pessoa."))
alert("Primeira pessoa")
let nome2 = (prompt("Nome da segunda pessoa."))
let idade2 = Number(prompt("Idade da segunda pessoa."))
let cor2 = (prompt("Cor favorito da segunda pessoa."))

console.log(`Registros de ${nome} e ${nome2}.`)
console.log(`Idade de ${nome}: ${idade} anos.`)
console.log(`Idade de ${nome2}: ${idade2} anos.`)
console.log(`Cor favorito de ${nome}: ${cor}.`)
console.log(`Cor favorito de ${nome2}: ${cor2}.`);

let maior = (`${nome} é maior que ${nome2}, é isso verdade?`)
let igual = (`${nome} e ${nome2} tem a mesma idade, é isso verdade?`)
let menor = (`${nome2} é maior que ${nome}, é isso verdade?`)


//primeira pessoa mais velha
if (idade > idade2) {
    console.log(`${nome} é maior que ${nome2}`)
    prompt(maior)
}
//mesma edade
if (idade == idade2) {
    console.log(`${nome} e ${nome2} tem a mesma idade.`)
    prompt(igual)
}
//segunda pessoa mais velha
else if (idade < idade2) {
    console.log(`${nome2} é maior que ${nome}`)
    prompt(menor)
} */
//-------------------------------------------------------------------------------------------------
//ambos sao iguais

/* let repete = true
while (repete) {

    let repete = false
}



while (true) {

    let nome = (prompt("Nome da primeira pessoa."))
    let idade = Number(prompt("Idade da primeira pessoa."))
    let cor = (prompt("Cor favorito da primeira pessoa."))

    let pessoa = new Pessoa(nome, idade, cor)

    if () {
        break;
    } 
} */

