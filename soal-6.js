function getAngkaTerbesarKedua(dataNumbers){
  const data = []
  
  if(typeof(dataNumbers) == 'undefined'){return "ERROR : Data cannot be empty"}
  if(typeof(dataNumbers) !== 'object'){return "ERROR : Your input is not array"}
  
  new Set(dataNumbers).forEach((item) => data.push(item))
  return data.sort((a,b) => b-a)[1]
}

const dataAngka = [9,4,7,7,4,3,2,2,8]

console.log(getAngkaTerbesarKedua(dataAngka)) // => 8
console.log(getAngkaTerbesarKedua(0)) // => "ERROR : Your input is not array"
console.log(getAngkaTerbesarKedua()) // => "ERROR : Data cannot be empty"