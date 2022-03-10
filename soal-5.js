
function getSplitName(personName) {
  var result = {};
  const splitName = personName.toString().split(' ')
  let regNumber = /^[0-9]+$/

  if(splitName.length > 3){result = "Error : This function is only for 3 characters name";}

  if(splitName.length == 3 && !splitName.toString().match(regNumber)){
    result.firstName = splitName[0];
    result.middleName = splitName[1];
    result.lastName = splitName[2];
  } 

  if(splitName.length == 2 && !splitName.toString().match(regNumber)){
    result.firstName = splitName[0];
    result.middleName = null;
    result.lastName = splitName[1];
  } 

  if(splitName.length == 1 && !splitName.toString().match(regNumber)){
    result.firstName = splitName[0];
    result.middleName = null;
    result.lastName = null;
  } 
  
  if(splitName.toString().match(regNumber)){result = "Error : This function is only for string name";}

  return result
}


console.log(getSplitName("Aldi Daniela Pranata"))
console.log(getSplitName("Dwi Kuncoro"))
console.log(getSplitName("Aurora"))
console.log(getSplitName("Aurora Aureliya sukma Darma"))
console.log(getSplitName(0))