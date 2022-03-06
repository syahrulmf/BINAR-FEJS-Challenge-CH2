function checkTypeNumber(givenNumber) {
  // tulis kode logic kamu didalam blok ini ya

  let result = ""

  if(givenNumber % 2 === 0 && typeof(givenNumber) == 'number'){
    result = "GENAP"
  }else if(typeof(givenNumber) == 'string' || typeof(givenNumber) == 'object'){
    result = "Error: Invalid data type"
  }
  else if(typeof(givenNumber) == 'undefined'){
    result = "Error: Bro where is the parameter?"
  }else{
    result = "GANJIL"
  }

  return result
}

// EXPECTED RESULT
// Ketika function tersebut dipanggil
console.log(checkTypeNumber(10)) //OUTPUT yang keluar => "GENAP"
console.log(checkTypeNumber(3)) //OUTPUT yang keluar => "GANJIL"
console.log(checkTypeNumber("3")) // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber({})) // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber([])) // OUTPUT yang keluar => "Error: Invalid data type"
console.log(checkTypeNumber()) // OUTPUT yang kelaur => "Errpr: Bro where is the parameter?"