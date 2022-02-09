/*  Exercícios de interpretação de código

    Exercício 1. 

    10
    10 5
    
    Exercício 2.

    20 10 10

    Exercício 3.

    p = horasTrabalhadas
    t = salarioDia

*/



/*  Exercícios de escrita de código  */

    // Exercício 1
    const nome1 = ""
    const idade1 = ""

    console.log(typeof nome1, typeof idade1)

    /* Os dois resultados deram como tipo string pois, 
    apesar de vazio, como está entre aspas considera
    como string */

    const nome2 = prompt("Qual é seu nome?")
    const idade2 = prompt("Qual é sua idade?")

    console.log(typeof nome2, typeof idade2)

    /* pelo que entendi, os dois resultados deram como 
    stript pois o valor digitado é recebido pelo prompt 
    como script, se tivesse especificado como Number 
    teria dado certo, acredito*/

    console.log("Olá,", nome2, "você tem", idade2, "anos.")

    // Exercício 2

    const almoço = prompt("Você almoçou hoje?")
    const musica = prompt("Você ouviu música hoje?")
    const pet = prompt("Você abraçou seu pet hoje?")

    respostaAlmoço = almoço
    respostaMusica = musica
    respostaPet = pet

    console.log("Você almoçou hoje? -", respostaAlmoço)
    console.log("Você ouviu música hoje? -", respostaMusica)
    console.log("Você abraçou seu pet hoje? -", respostaPet)

    // Exercício 3

    let a = 10
    let b = 25
    let controle = 0

    controle = a
    a = b
    b = controle

    console.log("O novo valor de a é", a)
    console.log("O novo valor de b é", b)

    // DESAFIO


    const primeiroNumero = Number(prompt("Digite um número"))
    const segundoNumero = Number(prompt("Digite mais um número"))

    let soma = primeiroNumero + segundoNumero

    console.log("A soma dos números é", soma)

    let multiplicacao = primeiroNumero * segundoNumero

    console.log("O produto dos números é", multiplicacao)