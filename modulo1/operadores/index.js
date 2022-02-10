/* Exercícios
Exercícios de interpretação de código
    Questão 1
        a. false
        b. false
        c. true
        d.  boolean

    Questão 2
        O problema seria que o tipo que está recebendo 
        pelas variáveis não está especificada como Number,
        está sendo recebido como String, não considerando 
        a soma.

    Questão 3
        let primeiroNumero = Number(prompt("Digite um numero!"))
        let segundoNumero = Number(prompt("Digite outro numero!"))

        const soma = Number(primeiroNumero + segundoNumero)

        console.log(soma)
        console.log(typeof soma)
*/

//Exercícios de escrita de código
    //Questão 1
        // const idade = prompt("Qual é sua idade?")
        // const idadeAmigo = prompt("Qual é a idade do seu amigo?")
        
        // console.log(idade > idadeAmigo)
        // console.log(idade - idadeAmigo)

    //Questão 2
        // const par = prompt("Digite um número par")
        
        // console.log(par % 2)

        /*Só foi impresso o número 0, já que todo número
        par é divisivel por 2*/

        /*Será impresso o número 1, pois qualquer divisão
        de um número impar por 2 é 1 */

    //Questão 3
        // const anos = prompt("Quantos anos vc tem?")
        // const anosEmMeses = anos * 12
        // const anosEmDias = anos * 12 * 30
        // const anosEmHoras = anos * 12 * 30 * 24
        
        // console.log(anosEmMeses)
        // console.log(anosEmDias)
        // console.log(anosEmHoras)

    //Questão 4
        // const numero1 = prompt("Digite um número")
        // const numero2 = prompt("Digite outro número")
        // const condicao1 = numero1 > numero2
        // const condicao2 = numero1 == numero2
        // const condicao3 = numero1 % numero2 == 0
        // const consicao4 = numero2 % numero1 == 0

        // console.log(condicao1)
        // console.log(condicao2)
        // console.log(condicao3)
        // console.log(consicao4)
        
    
/* ******DESAFIO****** */
    //Questão 1
        //Fahrenheit(°F) para Kelvin(K)
        // const valorA = 77
        // const kevinA = (valorA - 32) * ( 5 / 9 ) + 273.15
        
        // console.log(kevinA, "K")

        // //Celsius(°C) para Graus Fahrenheit (°F)
        // const valorB = 88
        // const fahrenheitB = (valorB) * ( 9 / 5 ) + 32

        // console.log(fahrenheitB, "°F")

        // //Celsius(°C) para Graus Fahrenheit (°C) e Kelvin(K)
        // const valorC = 30
        // const fahrenheitC = (valorC) * ( 9 / 5 ) + 32
        // const kevinC = (fahrenheitC - 32) * ( 5 / 9 ) + 273.15

        // console.log(fahrenheitC, "°F", kevinC, "K")

        // //Valor intruido pelo usuário
        // const valorD = Number(prompt("Digite a temperatura em Celsius"))
        // const fahrenheitD = (valorD) * ( 9 / 5 ) + 32
        // const kevinD = (fahrenheitD - 32) * ( 5 / 9 ) + 273.15

        // console.log(fahrenheitD, "°F", kevinD, "K")

    //Questão 2
        // //Valor 280
        // const custoQuilowattHora = 0.05
        // const ValorFinal = custoQuilowattHora * 280

        // console.log(ValorFinal)

        // //Valor recebido pelo usuário
        // const custoQuilowattHora = 0.05
        // const quilowatt = Number(prompt("Digite a quantidade gasta de Quilowwatt"))
        // const ValorFinal = custoQuilowattHora * quilowatt

        // console.log("R$", ValorFinal)

    //Questão 3  - (Peguei os valores no Google)
        // //Libra(lb) para quilograma(kg)
        // const libraParaKg = 0.453
        // const libraA = 20
        // const kgA = libraA * libraParaKg

        // console.log("20 lb equivalem a", kgA, "kg")

        // //Onça(oz) para quilograma(kg)
        // const ozParaKg = 0.028
        // const oncaB = 10.5
        // const kgB = ozParaKg * oncaB

        // console.log("10.5 oz equilalem a", kgB, "kg")

        // // Milha(mi) para metro(m)
        // const miParaM = 1609.344
        // const milhaC = 100
        // const mC = milhaC * miParaM

        // console.log("100 mi equivalem a", mC, "m")

        // //Pés(ft) para metro(M)
        // const pesParaM = 0.3048
        // const pesD = 50
        // const metroD = pesParaM * pesD

        // console.log("50 ft equivalem a", metroD, "m")

        // //Galão(gal) para litro(l)
        // const galParaL = 3.785
        // const galE = 103.56
        // const litroE = galParaL * galE

        // console.log("103.56gal equivalem a", litroE, "l")

        // //Xícara(xic) para litro(l)
        // const xicF = 450
        // const litroF = xicF * 6 / 25

        // console.log("450 xic equivalem a", litroF, "l")

        //Valor recebido pelo usuário
        const xicF = Number(prompt("Digite o valor de xícaras para converter em litros"))
        const litroF = xicF * 6 / 25

        console.log("450 xic equivalem a", litroF, "l")