const mockup_restaurants = require('../public/mockup_restaurants');
const mockup_cities = require('../public/mockup_cities');
const mockup_tags = require('../public/mockup_tags');

// *** restaurants ***
const listAllRestaurants = async (req, res, next) => {
  console.log(`List all Restaurants...`);
  try {
    res.header("Content-Type", 'application/json');
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
  try {
    res.header("Content-Type", 'application/json');
    res.json(mockup_cities);
  }
  catch (err) {
    res.status(500).send(err);
  }
}

const listOneCity = async (req, res, next) => {
  const city = req.params.id;
  console.log(`City: ${city}`)
}

// *** tags ***
const listAllTags = async (req, res, next) => {
  console.log(`List all Tags...`);
  try {
    res.header("Content-Type", 'application/json');
    res.json(mockup_tags);
  }
  catch (err) {
    res.status(500).send(err);
  }
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