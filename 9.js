fetch('https://jsonplaceholder.typicode.com/posts/123456789')
  .then(response => {
    if (!response.ok) {
      throw new Error('API request failed');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Process the data further if needed
  })
  .catch(error => {
    console.error('An error occurred:', error);
    // Display an error message on the webpage
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'An error occurred while fetching the data.';
    document.body.appendChild(errorMessage);
  });
