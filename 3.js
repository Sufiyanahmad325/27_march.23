function ageInDays(person) {
    var fullName = person.firstName + " " + person.lastName;
    var ageInDays = person.age * 365;
  
    function logMessage() {
      console.log("The person's full name is " + fullName + " and their age in days is " + ageInDays + ".");
    }
  
    return logMessage;
  }
  
  // Example usage:
  var personInfo = {
    firstName: "John",
    lastName: "Doe",
    age: 30
  };
  
  var logAgeInDays = ageInDays(personInfo);
  logAgeInDays();
  // Output: The person's full name is John Doe and their age in days is 10950.
  