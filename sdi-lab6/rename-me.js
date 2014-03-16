//alert("JavaScript works!");

var animalsNames = function(){
	
	var animalsNames = ["zou", "saru", "kirin", "ushi","usagi","raion"];
	var inEnglsih = ["Elephant", "monkey", "giraffe", "cow", "bunny","lion"];
	var newAnimal = "golira";
	
	console.log("Let's see all the animals in Japanese and English!");
	console.log("The length of the array is " + animalsNames.length);
	
	for(var i = 0; i < animalsNames.length; i++){
		
		console.log("whats " + animalsNames[i] + "?");
		console.log(animalsNames[i] + " is " + inEnglsih[i] + " in Englsih!");
	};
	
	console.log(animalsNames);
	console.log("THIS IS HARD ONE! WHAT IS " + newAnimal + "??????????");
	
	animalsNames.unshift(newAnimal);
	console.log("this is for today! " + animalsNames);
	
	return[animalsNames];
};
var test = animalsNames();
console.log(test);