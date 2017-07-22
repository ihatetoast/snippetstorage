console.clear();

function whatIsInAName(collection, source) {
  //does obj in source match a key:val in coll
  //coll is an array, iterable
  var srcKey = Object.keys(source);
  console.log("srcKey is " + srcKey);

  var arr = [];
  // Only change code below this line
  //loop through collection set a prop bool to true
  //store val at idx for comparison
  for(var idx = 0; idx < collection.length; idx++){
    var hasProperties = true;     
    var collectionItem = collection[idx];
    //compare but knock out false first. if not knocked out, then ret.
    for(var i = 0; i <srcKey.length; i++){
      var srcKeyNow = srcKey[i];
      if (!collectionItem.hasOwnProperty(srcKeyNow) ) {
        hasProperties = false; 
      } 
      else {
        if ( collectionItem[srcKeyNow] !== source[srcKeyNow] ) {
          hasProperties = false; 
        }
      }
    }

    if ( hasProperties === true ) {
      arr.push(collectionItem);
    }
    
  }
  

  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });