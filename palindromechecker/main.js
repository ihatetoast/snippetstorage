function palindrome(str) {
  // Good luck!
  //get rid of spaces. allow only alpha num
  var origStrLC= str.toLowerCase().replace(/[^a-z0-9]/gi,'');
  //reverse the original with split rev join
  var newStr = origStrLC.split("").reverse().join("");
  console.log("origStr is to lower case", origStrLC);
  console.log("newStr is ", newStr);
//   res = str.replace(/[, ]+/g, " ").trim();
  
  
  if (origStrLC === newStr){
  return true;
  } else {
    return false;
  }
  
}



palindrome("monkey");
