
const request = require("request");

const args = process.argv.slice(2);
let breed = args[0];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
  if (error) {
    console.log("error")
  }
 
  const data = JSON.parse(body);
  console.log(data);

})
