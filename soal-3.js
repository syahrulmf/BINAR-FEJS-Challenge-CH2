function checkEmail(email) {
  let result = ""
  let regexEmail = /^([a-z\d\.-]+)@([a-z\d-]+).([a-z]{2,8})(\.[a-z]{2,8})?$/
  let regexEmailInvalid = /^([0-9])([a-z\d\.-]+)@([a-z\d-]+)$/
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
  } else {
    result = "ERROR : Email cannot be empty, Email must be a valid address, ex: me@mydomain.com"
  }
  return result
}

console.log(checkEmail("apranata@binar.co.id"))
console.log(checkEmail("apranata@binar.com"))
console.log(checkEmail("apranata@binar"))
console.log(checkEmail("apranata"))
console.log(checkEmail(123))
console.log(checkEmail())