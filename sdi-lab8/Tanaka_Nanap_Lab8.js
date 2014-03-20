//alert("JavaScript works!");

//variables
var emailInput = prompt("Please enter your email");

var emailChecker = function (stringValue){
	
	var at = emailInput.indexOf("@");
	
	var dot = emailInput.lastIndexOf(".");
	

//if statement 
	if ( at < 1 || dot < at + 2 || dot + 2 >= emailInput.length ) {
		var falseOutput = "The " + emailInput + " can\'t be verified and validated...";
		return falseOutput;
	} else {
		var trueOutput = "The " + emailInput + " had been verified successfully...";
		return trueOutput; 
	};
};


var threeStringFunction = function(string, comma, slash){
	
	var stringMod = string.split(comma);
	
	var stringOut = "";


	for(var i = 0; i < stringMod.length; i++) {
		
		stringOut = stringOut + stringMod[i] + slash;
	
	};
	
	return stringOut;
};


var receivedEmail = emailChecker(emailInput);

var newstrings = threeStringFunction("1,2,3,4,5", ",", "/");

console.log(receivedEmail);

console.log(newstrings);


