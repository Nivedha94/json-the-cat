const { fetchBreedDescription } = require('./breedfetch');

const breedName = process.argv[2];
// let breed = args[0];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});