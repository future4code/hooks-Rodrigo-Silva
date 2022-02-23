//Exercícios de interpretação de código

/*Exercício 1
a) Primeiro foi pedido para ser impresso o valor do elenco
que está na primeira posição(0), que seria Matheus Nachtergaele
   Depois pediu para imprimir o valor que está na penultima
posição (length - 1), que seria Denise Fraga
   Por último seria impresso o valor transmissoesHoje que está
na posição 2, que seria canal: "Globo", horario: "14h"

Exercício 2
a) Primeiro será imoresso o valor que estiver em cachorro mesmo,
sem alterações: nome: "Juca", idade: 3, raca: "SRD"
   Depois será impresso o mesmo valor do cachorro, porém substituindo
o nome para "Juba": nome: "Juba", idade: 3, raca: "SRD"
   Por último, será impresso o mesmo valor de gato, porém substituindo
no nome o "a" pelo "o": nome: "Jubo", idade: 3, raca: "SRD"

Exercício 3
a) e b) Será impresso o valor do backender, que é false
   Depois ele buscará o valor que está em altura, porém como
não tem esse parametro voltará indefinido
b) 
*/

//Exercícios de escrita de código
//Exercício 1
//a)
// const meuFilho = {
//     nome: "Tony",
//     apelido: ["Filho", "Gordo", "Narigudo"]
// }
// function cachorro(){
//     console.log("Eu sou", meuFilho.nome, "mas pode me chamar de:", meuFilho.apelido[0], ",", meuFilho.apelido[1], "e", meuFilho.apelido[2])
// }

// cachorro()

//b)
// const meuAmor = {
//     ...meuFilho,
//     apelido: ["Amor", "Barrigudo", "Vida"]
// }
// function cachorro2(){
//     console.log("Eu sou", meuAmor.nome, "mas pode me chamar de:", meuAmor.apelido[0], ",", meuAmor.apelido[1], "e", meuAmor.apelido[2])
// }

// cachorro2()


//Exercício 2
//a)
// const pessoa1 = {
//     nome: "Amanda",
//     idade: 18,
//     profissao: "Estudante",
// }
// const pessoa2 = {
//     nome: "Fred",
//     idade: 34,
//     profissao: "Advogado",
// }
//b)
// function retorno(){
//     const retornoNome = [pessoa1.nome, pessoa2.nome]
//     console.log(retornoNome)
//     const retornoCaracteresNome = [pessoa1.nome.length, pessoa2.nome.length]
//     console.log(retornoCaracteresNome)
//     const retornoIdade = [pessoa1.idade, pessoa2.idade]
//     console.log(retornoIdade)
//     const retornoProfissao = [pessoa1.profissao, pessoa2.profissao]
//     console.log(retornoProfissao)
//     const retornoCaracteresProfissao = [pessoa1.profissao.length, pessoa2.profissao.length]
//     console.log(retornoCaracteresProfissao)
// }

// retorno()


//Exercício 3
//a)
const carrinho = []
//b)
const fruta1 = {
    nome: "banana",
    disponibilidade: true,
}
const fruta2 = {
    nome: "abacate",
    disponibilidade: true,
}
const fruta3 = {
    nome: "limão",
    disponibilidade: true,
}
//c)
function incluirCarrinho() {
    carrinho.push(fruta1, fruta2, fruta3)
    console.log(carrinho)
}
incluirCarrinho()