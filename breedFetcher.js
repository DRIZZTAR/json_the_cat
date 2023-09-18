const request = require('request');

// Define a function named fetchBreedDescription
const fetchBreedDescription = function(breedName, callback) {
  // Construct the API endpoint URL with the specified breed name
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  // Make an HTTP GET request to the API endpoint
  request(apiUrl, (error, response, body) => {
    if (error) {
      callback(error, null); // Pass the error to the callback
    } else if (response.statusCode !== 200) {
      callback(`Received non-200 status code: ${response.statusCode}`, null);
    } else {
      // Parse the response body into a JavaScript object
      const data = JSON.parse(body);
      if (data.length > 0) {
        const breedInfo = data[0];
        callback(null, `${breedInfo.name}: ${breedInfo.description}`); // Pass breed description to the callback
      } else {
        callback('Breed not found.', null); // Handle case where breed is not found
      }
    }
  });
};

// Export the fetchBreedDescription function to make it available for use in other files
module.exports = { fetchBreedDescription };