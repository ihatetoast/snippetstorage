function chunkArrayInGroups(arr, size){}
  var givenSize = size;
  //container
  var newArr = [];
  //i+= size becasue i have to skip  over the ones i pushed
  for(var i = 0; i<arr.length; i+=size){
    //use slice as it does NOT alter the orig array
    //push the array at i and i + size number of indices.
    //i will always be 0 each iteration, so it's 
    var miniArrs =  newArr.push((arr.slice(i, i+size)));
    
  }
 return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);