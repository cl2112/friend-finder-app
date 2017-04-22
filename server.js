// Dependencies
//-----------------------------------------------------------------------------------
const express = require("express");
const bodyParser = require("body-parser");
const path = ("path");
//===================================================================================



// Express App set up
//-----------------------------------------------------------------------------------
var app = express();
var PORT = process.env.PORT || 2112;

// Sets up the Express app to handle data parsing
// express app handling data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
//====================================================================================


// The Friend Array
//-----------------------------------------------------------------------------------
var friendArray = [];
//===================================================================================


app.get("/", function(req, res){
	res.send("hello1");
});






// Sets up the a static folder for the frontend files.
app.use(express.static("./app"));


// server begins to listen
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});