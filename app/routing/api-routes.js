// Your api-routes.js file should contain two routes:

// A GET route with the url /api/friends.
//  This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results.
//  This route will also be used to handle the compatibility logic.

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("./app"));

router.get("/api/friends", function(req, res){
	res.json()
});

router.post("api/friends", function(req, res){
	var name = req.body.name;
	var pic = req.body.pic;
	var answers = req.body.answers;

	console.log("data recieved");

	console.log(name, pic, answers);
});

module.exports = router;