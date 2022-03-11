/*Exercícios de interpretação de código

Exercício 1
a) Será impresso o array completo uma vez por causa do "item" especificado,
depois será impresso novamente por causa do "index". Agora o array
não entendi o que faz, mas não foi impresso nada quando testei.

Exercício 2
a) Vai ser impresso o array como os nomes do array original.

Exercício 3
a) Será impresso o array como todos os apelidos que não sejam "Chijo"
*/




// Exercícios de escrita de código

//Exercício 1

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

 //a)
//   const nomesDogs = pets.map((nomes) => {
//     return nomes.nome
//   })
// console.log(nomesDogs)

// //b)
//   const tipoSalsicha = pets.filter((tipo) =>{
//       return tipo.raca === "Salsicha"
//   })
// console.log(tipoSalsicha)

//c)
//   const desconto = pets.filter((descontoPoodle) =>{
//           return descontoPoodle.raca === "Poodle"
//   })

//   const descontoFinal = desconto.map((descontoPoodleFinal) =>{
//           return `Você ganhou um cupom de desconto de 10% para tosar o/a ${descontoPoodleFinal.nome}!`
//   })

//   console.log(descontoFinal)


// Exercício 2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 //a)
//  const nome = produtos.map((nomeProdutos) =>{
//     return nomeProdutos.nome
//  })
//  console.log(nome)

//  //b)
//  const desconto = produtos.map((precoProduto)=>{
//     return (precoProduto.preco - (precoProduto.preco * 0.05)).toFixed(2)
//  })
//  console.log(desconto)
//  //c)
//  const bebibas = produtos.filter((nomesBebibas) =>{
//     return nomesBebibas.categoria === "Bebidas"
//  })
//  console.log(bebibas)
 //d)
 const ype = produtos.filter((produtoYpe)=>{
    return produtoYpe.nome.includes("Ypê")
 })
 console.log(ype)
 //e)
 const frase = ype.map((fraseCompleta) =>{
     return `Compre ${fraseCompleta.nome} por ${fraseCompleta.preco}`
 })
 console.log(frase)