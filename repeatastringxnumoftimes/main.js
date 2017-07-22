function repeatStringNumTimes(str, num) {

//concat the strings num times and then join
  
  var repStrArr=[];
  if(num <=0){
    return "";
  }else{
    for (var i = 0; i<num; i++){
      repStrArr = repStrArr.concat(str);
    }
    var repStr = repStrArr.join("");
    return repStr;
  }
}

repeatStringNumTimes("*", 8);