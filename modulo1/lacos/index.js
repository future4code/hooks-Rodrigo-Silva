/* Exercícios de interpretação de código

Exercício 1

Desculpe, realmente não consegui entender a logica, entendi a montagem 
mas a lógica do resultado que apareceu não consigo entender.

Exercício 2

a)
O código irá consultar cada número do array para verificar se é menor que 18,
e irá imprimir todos os números que a condição for verdadeira.

b)
Acredito que seria sim, só colocar a posição do indice entre colchetes na 
frente do "lista"

Exercício 3

Irá impresso o * igual o número de vezes do valor impresso pelo usuário,
no caso se digitar 4 será impresso:
*
**
***
****
*/



// Exercícios de escrita de código

// Exercício 1
// a) b)

// let quantidadePets = Number(prompt("Quantos bichinhos de estimação você tem?"))
// const listaNomes = []
// let quantidadePetsControle = quantidadePets
// while(quantidadePets = 0) {

// 	console.log("Que pena! Você pode adotar um pet!")

// }
// while(quantidadePets <= quantidadePetsControle) {

// 	const digitaNomesPets = prompt("Digite o nome de um deles")
// 	listaNomes.push(digitaNomesPets)
// 	quantidadePets++

// }
// console.log(listaNomes)

// Exercício 2
// d) e)
const arrayOriginal = [5, 12, 13, 30]
// a)
console.log(arrayOriginal)
// b)
let valorA = 0
let i = 0
while(valorA < arrayOriginal.length) {
	let numeroDivido = arrayOriginal[i] / 10
	valorA++
	i++
	console.log(numeroDivido)
}
// c)
const novoArray = []
let j = 0
let valorB = 0

while(valorB < arrayOriginal.length) {
	let numeroPar = arrayOriginal[j] % 2
	if(numeroPar === 0 ) {
			novoArray.push(arrayOriginal[j])
	}
	valorB++
	j++
}
console.log(novoArray)
// d)
let valorC = 0
let k = 0
const outroNovoArray = []
while(k < arrayOriginal.length) {
	valorC = arrayOriginal[k]
	k++
	outroNovoArray.push(`O elemento do índex ${k} é: ${valorC}`)
}
console.log(outroNovoArray)
// e)
let valorMaximo = 0
let m = 0
while(valorMaximo < arrayOriginal[m]) {
	valorMaximo = arrayOriginal[m]
	m++
}
console.log(valorMaximo)