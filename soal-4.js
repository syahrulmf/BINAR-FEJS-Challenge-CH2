function isValidPassword(givenPassword) {
  
  if(typeof(givenPassword) == 'undefined'){return `ERROR : (Password tidak boleh kosong)`}

  if(givenPassword.length >= 8 && givenPassword.toString().match(/[A-Z]/) && givenPassword.toString().match(/[a-z]/) && givenPassword.toString().match(/[0-9]/)){
    return true
  }
  
  if(givenPassword.length < 8 && givenPassword.toString().match(/[A-Z]/) && givenPassword.toString().match(/[a-z]/) && givenPassword.toString().match(/[0-9]/)){
    return `false (Karena ${givenPassword} hanya terdiri dari ${givenPassword.length} huruf)`
  }
  
  if(givenPassword.length >= 8 && givenPassword.toString().match(/[a-z]/) && givenPassword.toString().match(/[0-9]/)){
    return `false (Karena ${givenPassword} tidak ada huruf besar)`
  }
  
  if(givenPassword.length < 8 && givenPassword.toString().match(/[a-z]/) && givenPassword.toString().match(/[0-9]/)){
    return `false (Karena ${givenPassword} tidak ada huruf besar dan hanya terdiri dari ${givenPassword.length} huruf)`
  }
  
  if(givenPassword.length >= 8 && givenPassword.toString().match(/[a-z/@#$%&*]/)){
    return `false (Karena ${givenPassword} tidak ada angka)`
  }
  if(givenPassword.length < 8 && givenPassword.toString().match(/[a-z/@#$%&*]/)){
    return `false (Karena ${givenPassword} tidak ada angka dan hanya terdiri dari ${givenPassword.length} huruf)`
  }
  
  return `false (Karena ${givenPassword} hanya berisikan number)` 
}

// RESULT

console.log(isValidPassword("Meong2021")) // => true
console.log(isValidPassword("meong2021")) // => false (Karena meong2021 tidak ada huruf besar)
console.log(isValidPassword("@eong")) // => false (Karena @eong tidak ada angka dan hanya terdiri dari 5 huruf)
console.log(isValidPassword("Meong2")) // => false (Karena Meong2 hanya teridir dari 6 huruf)
console.log(isValidPassword(0)) // => false (Karena 0 hanya berisikan number)
console.log(isValidPassword()) // => ERROR : (Password tidak boleh kosong)