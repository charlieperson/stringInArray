function searchString (str, array) {
  var status = false;
  for(var i=0; i<array.length; i++) {
    if(array[i] === str) status = true;
  }
  return status;
}
