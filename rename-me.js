//alert("JavaScript works!");

var bnn = "banana";
var app = "\"apple\"";
var bnnTR = true
var numOfPrice = 3;
var numOfBnn;

console.log( bnn + app + bnnTR +  numOfPrice );

bnn = confirm("Do you want banana ?");

if(bnn === bnnTR){
	var numOfBnn = prompt ("how many banana you want it?");
	if(isNaN(numOfBnn)){
		console.log("Its not a number!");
	
	}else{
		console.log("It will be " + numOfBnn*numOfPrice + " dallors.");
		console.log("Thank you for shopping at cicle P!!");
	}
	
}else{
	
	var appUwant = prompt("Do you want " + app + "?", "yes");
	if(appUwant === "yes"){
	console.log("Okieedokiee!!!");
		}else{
	console.log("we don't have nothing to sell!! soweee!!");
};
};



