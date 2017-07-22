function confirmEnding(str, target) {
  //get target length to know where to start and use neg number to 
  //count from the back
  var targLen = target.length;
//console.log("target length is "+targLen);
  //target length let's me know how where to start checking str
  //target letters tell me what to compare
  var targInStr=str.substr(-targLen);
//   console.log('Target in string is '+targInStr);
  if(targInStr == target){
    return true;
  }else{
    return false;
  }
  return str;
}

confirmEnding("Bastian", "n");