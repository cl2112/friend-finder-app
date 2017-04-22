$(document).on("click", "#submitSurvey", function(){

	var name = $("#name").val().trim();
	var pic = $("#pic").val().trim();
	var answers = [];

	for ( var i = 1; i < 10 + 1; i++){
		var answer = $('input[name=answer'+i+']:checked').val();
		console.log(answer);
		answers.push(answer);
	};
	

	$.post("/app/friends",
	{
		name: "" + name,
		pic: "" + pic,
		answers: answers
	},function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });

});	

console.log("Check");