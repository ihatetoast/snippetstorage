
function truthCheck(collection, pre) {
  console.log("pre is " + pre);
  var falsies  =[];
  for(var i = 0; i<collection.length; i++){
   
    if(!collection[i][pre]){
      falsies.push(collection[i]);
    } 
  
  } if(falsies.length > 0){
    return false;
  } else{
    return true;
  }
  console.log(falsies);
}

truthCheck([
  {"user": "Tinky-Winky", "sex": "male"}, 
  {"user": "Dipsy", "sex": "male"}, 
  {"user": "Laa-Laa", "sex": "female"}, 
  {"user": "Po", "sex": "female"}
], "sex");
