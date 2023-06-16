// Function to simulate an asynchronous API call
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { name: 'John', age: 30 };
      resolve(data);
    }, 2000);
  });
}

// Function to process the fetched data
async function processData() {
  try {
    const result = await fetchData();
    console.log('Fetched data:', result);
    const greeting = `Hello, ${result.name}!`;
    console.log('Greeting:', greeting);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Invoke the data fetching and processing functions
processData();
console.log('Processing started...');