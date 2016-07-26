// for loop

function searchString (str, array) {
  var status = false;
  for(var i=0; i<array.length; i++) {
    if(array[i] === str) status = true;
  }
  return status;
}

// recursion

function searchString(str, array) {
  var i = 0;
  function findIt(item) {
    if(item === str) return true;
    if(i >= array.length) return false;
    return findIt(array[i= i+1]);
  }
  return findIt(array[0]);
}
