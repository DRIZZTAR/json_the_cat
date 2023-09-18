const request = require('request');

// Define the API endpoint URL with the query parameter for the Siberian breed
const apiUrl = 'https://api.thecatapi.com/v1/breeds/search?q=Siberian';

// Make a GET request to the API endpoint
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error(`Received non-200 status code: ${response.statusCode}`);
  } else {
    //CHeck to see type of body, it will be a string
    console.log(typeof body);
    // The 'body' variable contains the response as a string, so parse it to a JavaScript object
    const data = JSON.parse(body);

    // Check the type of the parsed data (should be an array of breed objects)
    console.log(typeof data);

    // Now you can work with 'data' as a JavaScript object
    console.log(data);

    // Access specific properties, for example, the first breed's name
    if (data.length > 0) {
      console.log('Breed Name:', data[0].name);
    } else {
      console.log('Breed not found.');
    }
  }
});
