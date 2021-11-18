const mockup_restaurants = require('../public/mockup_restaurants')
// const mockup_restaurants = 


// {
//             "id": 123,
//             "name": "someName",
//             "city": "someCity",
//             "lat": 52,
//             "lon": 10,
//             "image": "someImageAsURL",
//             "tags": ["tag1", "tag2"],
//             "comments": [ "comment1", "comment2"],

// }


// *** restaurants ***
const listAllRestaurants = async (req, res, next) => {
  console.log(`List all Restaurants...`);
  try {
    res.header("Content-Type", 'application/json');
    // res.sendFile(path.join("../public/", "mockup_restaurants.json"));
    res.json(mockup_restaurants);

  }
  catch (err) {
    res.status(500).send(err);
  }
}

const listOneRestaurant = async (req, res, next) => {
  const restaurantID = req.params.id;
  console.log(`Parameter: ${restaurantID}`)
}

// *** cities ***
const listAllCities = async (req, res, next) => {
  console.log(`List all Cities...`);
}

const listOneCity = async (req, res, next) => {
  const city = req.params.id;
  console.log(`City: ${city}`)
}

// *** tags ***
const listAllTags = async (req, res, next) => {
  console.log(`List all Tags...`);
}

const listOneTag = async (req, res, next) => {
  const tag = req.params.id;
  console.log(`Tag: ${tag}`)
}


module.exports = {
  listAllRestaurants,
  listOneRestaurant,
  listAllCities,
  listOneCity,
  listAllTags,
  listOneTag,
};