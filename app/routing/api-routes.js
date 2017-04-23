// Your api-routes.js file should contain two routes:

// A GET route with the url /api/friends.
//  This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results.
//  This route will also be used to handle the compatibility logic.

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const app = express();


// Sets up the Express app to handle data parsing
// express app handling data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
//====================================================================================




module.exports = router;