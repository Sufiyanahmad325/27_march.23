async function fetchDataFromAPIs() {
    try {
      const response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const response2 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  
      if (!response1.ok || !response2.ok) {
        throw new Error('API request failed');
      }
  
      const data1 = await response1.json();
      const data2 = await response2.json();
  
      const result = {
        todo: data1,
        post: data2
      };
  
      console.log(result);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  
  // Call the function to retrieve and log the combined data
  fetchDataFromAPIs();
  