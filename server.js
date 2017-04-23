// Dependencies
//-----------------------------------------------------------------------------------
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Routers
// const apiRoutes = require("./app/routing/api-routes.js");
// const htmlRoutes = require("./app/routing/html-routes.js");
//===================================================================================


// Express App set up
//-----------------------------------------------------------------------------------
var app = express();
var PORT = process.env.PORT || 2112;
//===================================================================================



// Sets up the Express app to handle data parsing
// express app handling data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
//====================================================================================

var friendsArray = [];

function friend(name, pic, answersArray, friendNumber){
	this.name = name;
	this.pic = pic;
	this.answers = answersArray;
	this.friendNumber = friendNumber;
};


// Sets up the a static folder for the frontend files.
app.use(express.static(path.join(__dirname, 'app/public')));



app.post("/api/friends", function(req,res){
	var name = req.body.name;
	var pic = req.body.pic;
	var answers = req.body.answers;
	var friendNumber = 0;

	for (var i = 0; i < answers.length; i++){
		friendNumber += parseInt(answers[i]);
	}	

	var friendObj = new friend(name, pic, answers, friendNumber);

	friendsArray.push(friendObj);

	console.log(friendsArray);
	console.log("New friend entered");

	var newFriendIndex = 0;
	var friendDifference = 0;
	
	for (var i = 0; i < friendsArray.length; i++){
		var newFriendNumber = friendsArray[i];
		
		var newFriendDifference = friendNumber - newFriendNumber

		if (newFriendDifference < 0){
			newFriendDifference *= -1;
		}

		if (newFriendDifference < friendDifference){
			newFriendIndex = i;
			friendDifference = newFriendDifference;
		}

		console.log("best Match = " + friendsArray[newFriendIndex].name);

		
	}
});

app.get("/api/friends", function(req,res){
	res.json({test:"test"});
});


app.get("/survey", function(req,res){
	res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/", function(req,res){
	res.sendFile(path.join(__dirname, "app/public/home.html"));
});




// server begins to listen
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
  });