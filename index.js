// Require the fetchBreedDescription function from breedFetcher.js
const { fetchBreedDescription } = require('./breedFetcher');

// Get the breed name from the command-line arguments
const breedName = process.argv[2];

// Check if the user provided a breed name
if (!breedName) {
  console.error('Please provide a breed name as a command-line argument.');
  process.exit(1);
}

// Call the fetchBreedDescription function, passing the breed name and a callback function
fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.error('Error:', error); // Handle and log errors
  } else {
    console.log(description); // Log the breed description
  }
});
