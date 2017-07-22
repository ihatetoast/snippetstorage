function largestOfFour(arr) {
  // You can do this!
  var arrLargest = [];
    for(var i=0; i<arr.length; i++) {     
      // Initial maximum, neg infin prevents any number from being
      //lower than it
        var maxNum = -Infinity;                  
        for(var j=0; j<arr[i].length; j++)       
            maxNum = Math.max(maxNum, arr[i][j]); // Update maximum
            arrLargest.push(maxNum);                     // Store the real maximum
            }
 console.log(arrLargest);
  return arrLargest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

