function fetchDataFromAPI() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(function(response) {
        if (!response.ok) {
          throw new Error('API request failed');
        }
        return response.json();
      })
      .then(function(data) {
        console.log(data);
      })
      .catch(function(error) {
        console.error('An error occurred:', error);
      });
  }
  
  // Call the function to fetch and log the data
  fetchDataFromAPI();
  