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




// app.use(express.static("./app"));
const friendArray = require("./friend-array.js");


function friend(name, pic, answersArray){
	this.name = name;
	this.pic = pic;
	this.answers = answersArray;
};


router.get("/api/friends", function(req, res){
	res.json(friendArray);
});

router.post("api/friends", function(req, res){
	var name = req.body.name;
	var pic = req.body.pic;
	var answers = req.body.answers;

	console.log("data recieved");

	console.log(name, pic, answers);

	var friend = new friend(name, pic, answers);

	friendArray.push(friend);
});

module.exports = router;