// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   const tamanho = array.length
   return tamanho
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   const invertido = array.reverse()
   return invertido
}
// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const ordenado = array.sort(function(a, b){
        return a - b
    })
    return ordenado
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const pares = array.filter((item) =>{
        if(item % 2 === 0){
            return item
        }
    })
    return pares
}
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const paresElevados = array.map((item) =>{
        if(item % 2 === 0){
            return item * item
        }
    })
    const retiraVazio = paresElevados.filter(function(i){
        return i
    })
    return retiraVazio
    }

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const maior = Math.max(...array)
    return maior    
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {   
        let maiorNumero = 0
        let menorNumero = 0
        let maiorDivisivelPorMenor = 0

        if(num1 > num2){
            maiorNumero = num1
            menorNumero = num2
        } else {
            maiorNumero = num2
            menorNumero = num1
        }

        let diferenca = maiorNumero - menorNumero
    
        if(maiorNumero % menorNumero === 0){
            maiorDivisivelPorMenor = true
        } else {
            maiorDivisivelPorMenor = false
        }
            return{ 
                maiorNumero: maiorNumero,
                maiorDivisivelPorMenor: maiorDivisivelPorMenor,
                diferenca: diferenca
             }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const pares = []
    let inicial = 0
   for(let i = 0; i < n; i++){
        pares.push(inicial)
        inicial++
        inicial++
   }
   return pares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if(ladoA === ladoB && ladoB === ladoC){
        return "Equilátero"
    } 
    if((ladoA === ladoB && ladoB !== ladoC) || (ladoA === ladoC && ladoA !== ladoB) || (ladoB === ladoC && ladoB !== ladoA)) {
        return "Isósceles"
    }
    if ((ladoA !== ladoB && ladoA !== ladoB && ladoB !== ladoC)){
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const novoArray = array.sort(function(a, b){
        return a - b
    })
    const resultado = [(novoArray[novoArray.length - 2]), novoArray[1]]
    return resultado
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const anonima = {...pessoa}
    anonima.nome = "ANÔNIMO"
    return anonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   const autorizada = pessoas.filter((auto) =>{
       if(auto.altura > 1.5 && auto.idade < 60 && auto.idade > 14){
           return auto
       }
   })
   return autorizada
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const naoAutorizada = pessoas.filter((auto) =>{
        if(auto.altura > 1.5 && auto.idade < 60 && auto.idade > 14){
        } else {
            return auto
        }
    })
    return naoAutorizada
 
 }

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let soma = 0
    let novoSaldo = 0;
    for(let k = 0; k < contas.length; k++) {
        for(let somaCompras = 0; somaCompras < contas[k].compras.length; somaCompras++){
            soma += contas[k].compras[somaCompras]
            novoSaldo = contas[k].saldoTotal - soma
            contas[k].saldoTotal = novoSaldo
            soma = 0
        }
        contas[k].compras = []
    }
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    const lista = [...consultas]
    lista.sort(function(a, b) {
        if (a.nome > b.nome) {
            return 1
        }
        if (a.nome < b.nome) {
            return -1
        }
        return 0
    })
    return lista
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    //novo array para ordenar
    const listaData = [...consultas]

    //criei a repetição para converter a data para o estilo americana(YYYY-MM-DD)
    let novaData = 0
    for(let u = 0; u < listaData.length; u++) {
        novaData = listaData[u].dataDaConsulta.replaceAll("/","-").split('-').reverse().join('-');
        listaData[u].dataDaConsulta = novaData
    }

    //ordenar as datas já convertidas
    listaData.sort(function (a, b) {
       const x = new Date(a.dataDaConsulta)
       const y = new Date(b.dataDaConsulta)

       return x - y
   })

   //voltei a data para o estilo brasileiro para o sistema aceitar
   for(let g = 0; g < listaData.length; g++) {
       novaData = listaData[g].dataDaConsulta.replaceAll("-","/").split('/').reverse().join('/');
       listaData[g].dataDaConsulta = novaData
   }

    return listaData
}