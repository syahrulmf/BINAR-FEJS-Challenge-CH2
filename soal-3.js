function checkEmail(email) {
  let regexEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
  let regexEmailInvalid = /^([a-z\d\.-]+)@([a-z\d-]+)$/

  if(typeof(email) == 'undefined'){return "ERROR : Email cannot be empty, Email must be a valid address, ex: me@mydomain.com"}

  if (typeof(email) !== 'string') {
    return "ERROR : Your email is invalid because you only input the number, Email must be a valid address, ex: me@mydomain.com"
  }

  if (!email.match(regexEmail) && !email.match(regexEmailInvalid)) {
    return "ERROR : Your email is invalid because you only input the string, Email must be a valid address, ex: me@mydomain.com"
  }

  if(email.match(regexEmailInvalid)){
    return "INVALID"
  } 
  
  return "VALID"
}

console.log(checkEmail("apranata@binar.co.id")) // => "VALID"
console.log(checkEmail("apranata@binar.com")) // => "VALID"
console.log(checkEmail("apranata@binar")) // => "INVALID"
console.log(checkEmail("apranata")) // => "ERROR: Your email is invalid because you only input the string, Email must be a valid address, ex: me@mydomain.com""
console.log(checkEmail(123)) // => "ERROR : Your email is invalid because you only input the number, Email must be a valid address, ex: me@mydomain.com"
console.log(checkEmail()) // => "ERROR : Email cannot be empty, Email must be a valid address, ex: me@mydomain.com"