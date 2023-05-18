function printBookTitles(books, callback) {
    var titles = books.map(function(book) {
      return book.title;
    });
  
    titles.sort();
  
    callback(titles);
  }
  
  // Example usage:
  var books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
  ];
  
  function logTitles(titles) {
    console.log("Book titles in alphabetical order:");
    titles.forEach(function(title) {
      console.log(title);
    });
  }
  
  printBookTitles(books, logTitles);
  