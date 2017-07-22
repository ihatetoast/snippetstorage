function titleCase(str) {
  return str.replace(/\w\S*/g, function(txt){
    //first letter upper + rest of the word from index 1 on to lowercase
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

titleCase("I'm a little tea pot");