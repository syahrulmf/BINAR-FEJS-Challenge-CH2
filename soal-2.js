function checkTypeNumber(givenNumber) {
  
  if(typeof(givenNumber) == 'undefined'){return "Error: Bro where is the parameter?"}
  if(typeof(givenNumber) !== 'number'){return "Error: Invalid data type"}
  if(givenNumber % 2 === 0){return "GENAP"}
  return "GANJIL"

}

console.log(checkTypeNumber(10)) //OUTPUT yang keluar => "GENAP"
console.log(checkTypeNumber(3)) //OUTPUT yang keluar => "GANJIL"
console.log(checkTypeNumber("3")) // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber({})) // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber([])) // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber()) // OUTPUT yang keluar => "Error: Bro where is the parameter?"