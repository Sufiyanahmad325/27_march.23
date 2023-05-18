function doubleArrayElements(array, callback) {
    var doubledArray = array.map(callback);
    return doubledArray;
  }
  
  // Example usage:
  var numbersArray = [1, 2, 3, 4, 5];
  
  function double(element) {
    return element * 2;
  }
  
  var doubledArray = doubleArrayElements(numbersArray, double);
  console.log(doubledArray);
  // Output: [2, 4, 6, 8, 10]
  