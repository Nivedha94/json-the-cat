// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedfetch');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', () => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());
    });
  });

  it('returns a null for an invalid breed, via callback', () => {
    fetchBreedDescription('breedName', (err, desc) => {
      assert.equal('error', err);

      // const expectedDesc = undefined;
      assert.equal(expectedDesc, null);
      
    })
  })
});