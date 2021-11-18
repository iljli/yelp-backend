var express = require('express');
var router = express.Router();

const cors = require("cors");

router.use(cors()); //Allowing cors for all origins

const {
  listAllCities,
  listOneCity,
} = require("../controllers/controllers");

router.get('/', listAllCities);
router.get('/:id', listOneCity);


module.exports = router;