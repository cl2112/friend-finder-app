// Your html-routes.js file should include two routes:

// A GET Route to /survey which should display the survey page.
// A default USE route that leads to home.html which displays the home page.

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// Sets up the Express app to handle data parsing
// express app handling data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
//====================================================================================


// app.use(express.static("./app"));





router.get("/survey.html", function(req, res){
	res.sendFile(path.join(__dirname, "../public/survey.html"));
});



router.use("/",function(req, res){
	res.sendFile(path.join(__dirname, "../public/home.html"));
});



module.exports = router;

