/* Exercícios de interpretação de código

    Exercício 1
    a) O código recebe um valor do usuario, tranforma o 
    parametro em Number, depois verifica se o número é par 
    e diferente de zero, caso seja aparece a mensagem "Passou
    no teste", senão aparecerá "Não passou no teste".

    b) Os números pares e diferentes de zero.

    c) Os números impares.

    Exercício 2
    a) O código serve para informar o preço da fruta informada
    pelo usuário.
    
    b) Será impresso "O preço da fruta Maça é R$ 2.25"

    c) Será imrpesso "O preço da fruta Pêra é R$ 5", pois
    o valor de preco será substituido pelo valor no default,
    já que não tem o break para impedi-lo de seguir.

    Exercício 3
    a) A primeira linha recebe um valor do usuário e depois
    imediatamente a transforma em Number.

    b) Com o número 10 irá aparecer "Esse número passou no teste". 
    Com o número -10 ira aparecer nada.

    c) Haverá sim, o erro aparecerá pois a última linha, que chama
    a variável "mensagem" está no no escopo global, sendo que a
    variável está no escopo local.
}
*/

//Exercícios de escrita de código
// Exercício 1
// a, b e c)
// const idade = Number(prompt("Qual a sua idade?"))
// function verificador() {

//     if (idade>=18) {
//         console.log("Você pode dirigir");
//     } else {
//         console.log("Você não pode dirigir");
//     }
// }

// verificador()


// Exercício 2
// const turno = prompt("Em qual turno você estuda? M (matutino) ou V (Vespertino) ou N (Noturno)")

// function verificarTurno() {
//     if (turno.toUpperCase() === "M") {
//         console.log("Bom dia!");
//     }
//     if (turno.toUpperCase() === "V") {
//         console.log("Boa tarde!");
//     }
//     if (turno.toUpperCase() === "N") {
//         console.log("Boa noite!");
//     }
    /* TENTEI COLOCAR ESSA PARTE POREM NÃO DEU CERTO, PREFERI
    DEIXAR COMENTADO PARA MOSTRAR QUE TENTEI */
    // 
    // if (turno.toUpperCase() !== "M", turno.toUpperCase() !== "V", turno.toUpperCase() !== "N") {
    //         console.log("Valor Inválido");
    // }
// }
// verificarTurno();

//Ecercício 3
// const turno2 = prompt("Em qual turno você estuda? M (matutino) ou V (Vespertino) ou N (Noturno)")

// function verificarTurno2 () {

//     switch (turno2.toUpperCase()) {
//         case "M":
//             console.log("Bom dia!");
//             break;
//         case "V":
//             console.log("Boa tarde!");
//             break;
//         case "N":
//             console.log("Boa noite!");
//             break;
//         default:
//             console.log("Valor Inválido");
//             break;
//     }
// }
// verificarTurno2()


//Exercício 4
const genero = prompt("Qual gênero do filme quer assistir?");
const preco = Number(prompt("Qual o preço do ingresso que quer pagar?"));

function verificadorCinema() {

    if((genero.toLowerCase() === "fantasia") && (preco < 15)) {
        console.log("Bom filme!");
    } else {
        console.log("Escolha outro filme :(");
    }
}
verificadorCinema()