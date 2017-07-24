
function addTogether() {
  //make an array to iterate over to qualify for number. also will get length
  var paramArr = [].slice.call(arguments);//es6 would be Array.from(arguments)
  console.log("paramArr is " + paramArr);
  var arg1 = paramArr[0];
  console.log("first arg is " + arg1);
  //do if every. and if NOT every param a number, then ret undef
  if(!paramArr.every(function(param){
    return typeof param === 'number';
  })){
    return undefined;
  } 
  if (paramArr.length === 2){
    return paramArr[0] + paramArr[1];
  } else {
    return function(c){
      if(typeof c !== 'number'){
        return undefined;
      } else{
        return arg1 + c;
      }
    };
  }
  
  
  //do two args first:
  //add two also store first as will need if array.len is 1
  
  //fcn that takes second param to add to first. this is the () and then (), not (x,y)
  return paramArr;
}

addTogether(2)([3]);
