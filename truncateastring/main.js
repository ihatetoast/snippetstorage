function truncateString(str, num) {
 if(num<=3){
   //truncate that amount and tack on ...
   
   return str.slice(0,num).concat("...");
  }else if(str.length >num){
   //truncate num-3 so the three dots count as three of 11
   return str.slice(0,num-3).concat("...");
 }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
