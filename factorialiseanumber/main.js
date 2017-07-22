function factorialize(num) {
  //DQ ones that aren't pos integers
  if(num<0){
    return -1;
  //take care of 0 = 1 on its own
  }else if(num ===0){
    return 1;
    
  } else{
    //make var for num arg
    var fact = num;
    //while number decreases by one until greater than 2?
    while (num-- >1){
      fact *= num;
    }
   return fact;
  } 

}

factorialize(2);