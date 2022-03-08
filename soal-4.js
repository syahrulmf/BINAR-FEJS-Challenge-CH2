function isValidPassword(givenPassword) {
  let result

  if(typeof(givenPassword) == 'undefined'){givenPassword = '-'}

  if(givenPassword.toString().match(/[A-Z]/) && givenPassword.toString().match(/[a-z]/) && givenPassword.toString().match(/[0-9]/)){
    if(givenPassword.length >= 8){
      result = true
    } else {
      result = false + ` (Karena ${givenPassword} hanya terdiri dari ${givenPassword.length} huruf)`
    }
  } else if(givenPassword.toString().match(/[a-z]/) && givenPassword.toString().match(/[0-9]/)){
    if(givenPassword.length >= 8){
      result = result = false + ` (Karena ${givenPassword} tidak ada huruf besar)`
    } else {
      result = false + ` (Karena ${givenPassword} tidak ada huruf besar dan hanya terdiri dari ${givenPassword.length} huruf)`
    }
  } else if(givenPassword.toString().match(/[a-z/@#$%&*]/)){
    if(givenPassword.length >= 8){
      result = result = false + ` (Karena ${givenPassword} tidak ada angka)`
    } else {
      result = false + ` (Karena ${givenPassword} tidak ada angka dan hanya terdiri dari ${givenPassword.length} huruf)`
    }
  } else if(givenPassword.toString().match(/[0-9]/)) {
    result = false + ` (Karena ${givenPassword} hanya berisikan number)`
  } else if(givenPassword == '-'){
    result = `ERROR : (Password tidak boleh kosong)`
  }

  return result
}

// RESULT

console.log(isValidPassword("Meong2021")) // => true
console.log(isValidPassword("meong2021")) // => false (Karena meong2021 tidak ada huruf besar)
console.log(isValidPassword("@eong")) // => false (Karena @eong tidak ada angka dan hanya terdiri dari 5 huruf)
console.log(isValidPassword("Meong2")) // => false (Karena Meong2 hanya teridir dari 6 huruf)
console.log(isValidPassword(0)) // => false (Karena 0 hanya berisikan number)
console.log(isValidPassword()) // => ERROR : (Password tidak boleh kosong)