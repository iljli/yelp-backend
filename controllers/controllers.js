const mockup_restaurants = require('../public/mockup_restaurants');
const mockup_cities = require('../public/mockup_cities');
const mockup_tags = require('../public/mockup_tags');
const db = require("../database/client");

// *** restaurants ***
const listAllRestaurants = (req, res, next) => {
  console.log(`List all Restaurants...`);

  const getAllRests = {
    text: `SELECT DISTINCT r.name as restaurant, c.name as city, c.lat, c.lon
    FROM restaurants r
    LEFT JOIN cities c
    ON r.city_id = c.id
    ORDER BY r.name ASC`
    
  }
  try {
    res.header("Content-Type", 'application/json');
    try {
      db.query(getAllRests)
        .then((dbData) => res.send(dbData.rows))
        .catch((err) => res.sendStatus(500));
    }
    catch (err) {
      res.status(500).send(err);
    }
  }
  catch (err) {
    res.status(500).send(err);
  }
}

const listOneRestaurant = (req, res, next) => {
  const restaurantID = req.params.id;
  console.log(`Parameter: ${restaurantID}`)
  const getOneRest = {
    text: `
    SELECT DISTINCT r.name as restaurant, c.name as city, c.lat, c.lon, co.text, co.date, t.name
    FROM restaurants r
    LEFT JOIN cities c
    ON r.city_id = c.id
    LEFT JOIN restaurant_has_tag rht
    ON r.id = rht.id_restaurant
    LEFT JOIN tags t
    ON t.id = rht.id_tag
    LEFT JOIN comments co
    ON r.id = co.restaurant_id
    WHERE r.name=$1
    `,
    values: [restaurantID]
  }

  try {
    db.query(getOneRest)
      .then((dbData) => res.send(dbData.rows))
      .catch((err) => res.sendStatus(500));
    // res.header("Content-Type", 'application/json');
    // res.json(mockup_cities);
  }
  catch (err) {
    res.status(500).send(err);
  }
}

// *** cities ***
const listAllCities = (req, res, next) => {
  console.log(`List all Cities...`);
  try {
    db.query("SELECT name, lon, lat FROM cities ORDER BY name ASC")
      .then((dbData) => res.send(dbData.rows))
      .catch((err) => res.sendStatus(500));
  }
  catch (err) {
    res.status(500).send(err);
  }

}

const listOneCity = (req, res, next) => {
  const city = req.params.id;
  console.log(`City: ${city}`)

  const getCityByName = {
    text: `
    SELECT name, lon, lat FROM cities
    WHERE name=$1
    `,
    values: [city]
  }

  try {
    db.query(getCityByName)
      .then((dbData) => res.send(dbData.rows))
      .catch((err) => res.sendStatus(500));
    // res.header("Content-Type", 'application/json');
    // res.json(mockup_cities);
  }
  catch (err) {
    res.status(500).send(err);
  }
}

// *** tags ***
const listAllTags = (req, res, next) => {
  console.log(`List all Tags...`);
  try {
    db.query("SELECT name FROM tags ORDER BY name ASC")
      .then((dbData) => res.send(dbData.rows))
      .catch((err) => res.sendStatus(500));
  }
  catch (err) {
    res.status(500).send(err);
  }
}

const listOneTag = (req, res, next) => {
  const tag = req.params.id;
  console.log(`Tag: ${tag}`)
  const getTagByName = {
    text: `
    SELECT DISTINCT r.name as restaurant, t.name as tag
    FROM restaurants r
    LEFT JOIN restaurant_has_tag rht
    ON r.id = rht.id_restaurant
    LEFT JOIN tags t
    ON t.id = rht.id_tag
    WHERE t.name = $1
    `,
    values: [tag]
  }

  try {
    db.query(getTagByName)
      .then((dbData) => res.send(dbData.rows))
      .catch((err) => res.sendStatus(500));
  }
  catch (err) {
    res.status(500).send(err);
  }
}


module.exports = {
  listAllRestaurants,
  listOneRestaurant,
  listAllCities,
  listOneCity,
  listAllTags,
  listOneTag,
};