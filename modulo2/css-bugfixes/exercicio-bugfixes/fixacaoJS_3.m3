ˋˋˋfunction calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let notaFinal = (ex + (p1 * 2) + (p2 * 3)) / 6
  
  if(notaFinal >= 9) {
    return "A"
  }
  if(notaFinal >= 7.5 && notaFinal < 9){
    return "B"
  }
  if(notaFinal >= 6 && notaFinal < 7.5){
    return "C"
  }
  if(notaFinal < 6){
    return "D"
  }
}ˋˋˋ 