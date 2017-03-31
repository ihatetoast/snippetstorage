// first go:

function hasNum(myString) {
  return /\d/.test(myString);
}
function XO(str) {
	if(hasNum(str) === true){
	  return true;
	  } else {
	  const strLowCase = str.toLowerCase();
	  const exes = strLowCase.split('x').length-1;
	  const ohs = strLowCase.split('o').length-1;
	  if((strLowCase.indexOf('x')===-1) && (strLowCase.indexOf('o')===-1)){
	    return true;
	  //return false if x or o is absent
	  } else if((strLowCase.indexOf('x')===-1) || (strLowCase.indexOf('o')===-1)){
	    return false;
	  } else if(exes === ohs){
	    return true;
	    }
	  }
}
  // passed example tests but failed one of the 11 tests.

// after more research: count up with one letter, count down with the next. 

function XO(str) {
  const strToLC = str.toLowerCase();
  var charsOX = 0;
  for (var i = 0; i < str.length; i++) {
    if (strToLC[i] === "o") {
//     increase the charcount as it counts o
      charsOX++;
    } else if (strToLC[i] === "x") {
    //decrease charcount for every i
      charsOX--;
    }
  }
  //if charcount gets back to exactly 0, then there is the same number
  return charsOX === 0;
}


// best: 
//use regex. hold as variables. return if that string and its length matches the other
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
