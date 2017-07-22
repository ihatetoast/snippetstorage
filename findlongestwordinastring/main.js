function findLongestWord(str) {
  var origStr = str;
  var stringArr = origStr.split(" ");
  //iterate over array and compare each index. 
  //return largest string length
  var stringLengArr = [];
  for (var i = 0; i<stringArr.length; i++){
    stringLengArr.push(stringArr[i].length);
  }
   var largestWordLength=Math.max.apply(Math, stringLengArr);
   return largestWordLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");