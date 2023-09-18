const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    const breedName = 'Siberian'; // Specify the breed name
    fetchBreedDescription(breedName, (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      // Use string interpolation to include the breed name in the expected description
      const expectedDesc = `${breedName}: The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.`;

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  
  it('returns an error for an invalid/non-existent breed, via callback', (done) => {
    const breedName = 'InvalidBreed'; // Specify an invalid breed name
    fetchBreedDescription(breedName, (err, desc) => {
      // we expect an error for this scenario
      assert.notEqual(err, null);

      // The description should be null or undefined in case of an error
      assert.equal(desc, null);

      done();
    });
  });
});
