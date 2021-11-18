var express = require('express');
var router = express.Router();

const cors = require("cors");

router.use(cors()); //Allowing cors for all origins

const {
  listAllRestaurants,
  listOneRestaurant,
} = require("../controllers/controllers");

router.get('/', listAllRestaurants);
router.get('/:id', listOneRestaurant);


module.exports = router;