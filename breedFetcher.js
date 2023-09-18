const request = require('request');

// Get the breed name from command-line arguments
const breedName = process.argv[2];

// Check if the user provided a breed name
if (!breedName) {
  console.error('Please provide a breed name as a command-line argument.');
  process.exit(1);
}

// Define the API endpoint URL with the query parameter for the specified breed
const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

// Make a GET request to the API endpoint
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Request error:', error);
  } else if (response.statusCode !== 200) {
    console.error(`Received non-200 status code: ${response.statusCode}`);
  } else {
    // Parse the response body into a JavaScript object
    const data = JSON.parse(body);

    if (data.length > 0) {
      // Breed found, print breed information
      const breedInfo = data[0];
      console.log(`${breedInfo.name}: ${breedInfo.description}`);
    } else {
      // Breed not found
      console.log('Breed not found.');
    }
  }
});

