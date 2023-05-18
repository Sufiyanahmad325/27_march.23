function manipulateString(string) {
    var manipulatedString = string.toUpperCase();
  
    function logString() {
      console.log("The manipulated string is: " + manipulatedString);
    }
  
    return logString;
  }
  
  // Example usage:
  var inputString = "Hello, World!";
  var logManipulatedString = manipulateString(inputString);
  
  logManipulatedString();
  // Output: The manipulated string is: HELLO, WORLD!
  