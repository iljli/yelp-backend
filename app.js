/*
    performed commands:

    npx express-generator yelp-backend --no-view --git
    npx install dotenv
    npx install nodmon
*/

var express = require('express');
var path = require('path');
const cors = require("cors");

var app = express();

app.use(cors()); //Allowing cors for all origins

var restaurantsRouter = require('./routes/restaurants');
var cityRouter = require('./routes/city');
var tagRouter = require('./routes/tags');


// const port = process.env.PORT || 4000; 


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', restaurantsRouter);
app.use('/restaurants', restaurantsRouter);
app.use('/cities', cityRouter);
app.use('/tags', tagRouter);

// app.listen(port, () => { 
//     console.log(`App is listening at http://localhost:${port}`); 
// });

module.exports = app;
