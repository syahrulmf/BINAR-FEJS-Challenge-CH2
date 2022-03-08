
function getSplitName(personName) {
  var result = [];
  const splitName = personName.toString().split(' ')
  let regNumber = /^[0-9]+$/

  if(splitName.length > 3){
    result = "Error : This function is only for 3 characters name"
  } else if(splitName.length <= 3 && !splitName.toString().match(regNumber)){
    for (var i = splitName.length; i > 0; i--) {
      var NewIssue = {};
          
      NewIssue.firstName = splitName[0];
      NewIssue.middleName = splitName[1];
      NewIssue.lastName = splitName[2];
    }
    result.push(NewIssue);
  } else if(splitName.toString().match(regNumber)){
    result = "Error : This function is only for string name"
  }

  if(result[0].lastName == undefined){
    result[0].lastName = result[0].middleName
    result[0].middleName = undefined
  }

  if(result[0].middleName == undefined){result[0].middleName = null} 
  
  if(result[0].lastName == undefined){result[0].lastName = null}

  return result
}


console.log(getSplitName("Aldi Daniela Pranata"))
console.log(getSplitName("Dwi Kuncoro"))
console.log(getSplitName("Aurora"))
console.log(getSplitName("Aurora Aureliya sukma Darma"))
console.log(getSplitName(0))