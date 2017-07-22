
function reverseString(str) {
  var splitStr = str.split("");
  splitStr.reverse();
  return splitStr.join("");
}

reverseString("hello");