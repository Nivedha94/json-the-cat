
const request = require("request");

const breedName = process.argv.slice(2);

const fetchBreedDescription = function(breedName) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      console.log("error");
    }
 
    const data = JSON.parse(body);
    console.log(data);

  });
};

fetchBreedDescription(breedName);

module.exports = { fetchBreedDescription };
