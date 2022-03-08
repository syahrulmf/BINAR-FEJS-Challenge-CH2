function getAngkaTerbesarKedua(dataNumbers){
  const data = []
  let hasil
  
  if(typeof(dataNumbers) == 'object'){
    new Set(dataNumbers).forEach((item) => data.push(item))
    hasil = data.sort((a,b) => b-a)[1]
  } else if(typeof(dataNumbers) == 'number'){
    hasil = "ERROR : Your input is not array"
  } else if(typeof(dataNumbers) == 'undefined'){
    hasil = "ERROR : Data cannot be empty"
  }
  
  return hasil
}

const dataAngka = [9,4,7,7,4,3,2,2,8]

console.log(getAngkaTerbesarKedua(dataAngka)) // => 8
console.log(getAngkaTerbesarKedua(0)) // => "ERROR : Your input is not array"
console.log(getAngkaTerbesarKedua()) // => "ERROR : Data cannot be empty"