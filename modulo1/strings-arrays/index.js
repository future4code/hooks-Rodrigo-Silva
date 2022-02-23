//Strings e Arrays
/* Exercícios de interpretação de código
    Exercício 1 
    
    a) o valor não foi definido, então irá aparecer "undefined"

    b) o valor é null, então irá aparecer "null"

    c) irá contar a quantidade de elementos, então irá aparecer "11"

    d) irá monstrar qual elemento está na posição 0, ou seja o primeiro
    que aparecer, então irá aparecer "3"

    e) irá substituir o segundo valor(será o segundo porque i+1 daria 1, 
        e iria para o valor da segunda posição) por 19,
        e irá aparecer [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    
    f) irá atribuir o parametro "valor" ao i+6, o que buscaria a 7 
    posição, e irá aparecer "9"


    Exercício 2

    O código irá colocar toda a frase em maiuscula, trocar o caractere A pelo I 
    e contar quantos caracteres tem.
    Irá ser impresso: SUBI NUM ÔNIBUS EM MIRROCOS, 27
    */


    //Exercícios de escrita de código
        //Exercício 1 
        // const nome = prompt("Digite seu nome")
        // const email = prompt("Digite seu email")

        // console.log(`O email ${email.trim} foi cadastrado com sucesso. Seja bem-vindo(o), ${nome}!`)


        //Exercício 2
        // const comidas = ["pizza", "hamburguer", "cachorro-quente", "batata-frita", "lasanha"]
        // //a)
        // console.log(comidas)
        // //b)
        // console.log(`Essas são minhas comidas favoritas: 
        // ${comidas[0]}
        // ${comidas[1]}
        // ${comidas[2]}
        // ${comidas[3]}
        // ${comidas[4]}`)
        // //c)
        // const comidaUsuario = prompt("Qual é sua comida favorita?")
        // comidas.splice(1, comidaUsuario)
        // console.log(comidas)


        //Exercício 3
        //a)
        const listaDeTarefas = []
        //b)
        const tarefa1 = prompt("Digite a primeira tarefa")
        listaDeTarefas.push(tarefa1)
        const tarefa2 = prompt("Digite a segunda tarefa")
        listaDeTarefas.push(tarefa2)
        const tarefa3 = prompt("Digite a terceira tarefa")
        listaDeTarefas.push(tarefa3)
        //c)
        console.log(listaDeTarefas)
        //d)
        const tarefaFeita = Number(prompt("Digite a tarefa que já fez (0, 1, 2)"))
        //e)
        listaDeTarefas.splice(1, tarefaFeita)
        //f)
        console.log(listaDeTarefas)