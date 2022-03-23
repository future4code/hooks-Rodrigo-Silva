ˋˋˋ
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
    let salario = 2000
    
   if(qtdeCarrosVendidos > 0){
     salario = salario + (100 * qtdeCarrosVendidos) + (0.05 * valorTotalVendas)
   }
   return salario
}
ˋˋˋ