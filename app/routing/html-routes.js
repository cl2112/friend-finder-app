// Your html-routes.js file should include two routes:

// A GET Route to /survey which should display the survey page.
// A default USE route that leads to home.html which displays the home page.




app.use("/", function(req, res){
	res.sendFile("home.html");
});



app.get("/survey", function(req, res){
	res.sendFile("survey.html");
});



