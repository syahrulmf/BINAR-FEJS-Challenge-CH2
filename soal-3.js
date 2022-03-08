function checkEmail(email) {
  let result = ""
  let regexEmail = /^([a-z\d\.-]+)@([a-z\d-]+).([a-z]{2,8})(\.[a-z]{2,8})?$/
  let regexEmailInvalid = /^([a-z\d\.-]+)@([a-z\d-]+)$/
  let regexNumber = /^[0-9]+$/

  if(typeof(email) == 'undefined'){email = false}

  if(email.toString().match(regexEmailInvalid)){
    result = "INVALID"
  } else if (email.toString().match(regexEmail)) {
    result = "VALID"
  } else if (!email.toString().match(regexEmail) && typeof(email) == 'string') {
    result = "ERROR : Your email is invalid because you only input the string, Email must be a valid address, ex: me@mydomain.com"
  } else if (email.toString().match(regexNumber)) {
    result = "ERROR : Your email is invalid because you only input the number, Email must be a valid address, ex: me@mydomain.com"
  } else if(email == false){
    result = "ERROR : Email cannot be empty, Email must be a valid address, ex: me@mydomain.com"
  } else {
    result = "ERROR"
  }
  return result
}

console.log(checkEmail("apranata@binar.co.id")) // => "VALID"
console.log(checkEmail("apranata@binar.com")) // => "VALID"
console.log(checkEmail("apranata@binar")) // => "INVALID"
console.log(checkEmail("apranata")) // => "ERROR: Your email is invalid because you only input the string, Email must be a valid address, ex: me@mydomain.com""
console.log(checkEmail(123)) // => "ERROR : Your email is invalid because you only input the number, Email must be a valid address, ex: me@mydomain.com"
console.log(checkEmail()) // => "ERROR : Email cannot be empty, Email must be a valid address, ex: me@mydomain.com"