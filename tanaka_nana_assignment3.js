var DisneyWorld = "Disney";
var universalStudio = "\"Universal\"";
var numOfPrice = 95;
var disneyWorldTrue = true;

console.log( universalStudio + DisneyWorld + numOfPrice + disneyWorldTrue);

DisneyWorld = confirm ("Do you want to go to Disney World?");

if ( DisneyWorld === disneyWorldTrue) {
		
	var peopleGoing =prompt("How many people are going?");
	
	if(isNaN(peopleGoing)){
		console.log("it is not a number");
	}else {
		console.log("it is going to be " + peopleGoing * numOfPrice  + " dollar with Tax ");
	}
	
}else{
	
	var universalStudioQuestion = prompt( universalStudio +" Studio?");
	
		if (universalStudioQuestion === "yes"){
			console.log ("Lets' go!'");
		}else{
			console.log("so.. where do you want go?");
		};
};