var express = require('express');
var router = express.Router();

const cors = require("cors");

router.use(cors()); //Allowing cors for all origins

const {
  listAllTags,
  listOneTag,
} = require("../controllers/controllers");

router.get('/', listAllTags);
router.get('/:id', listOneTag);


module.exports = router;