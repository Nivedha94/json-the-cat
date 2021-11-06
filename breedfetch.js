
const request = require("request");




const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    if (error) {
      console.log("error");
    }
 
    const data = JSON.parse(body);
    console.log(data);

  });
};

module.exports = { fetchBreedDescription };
