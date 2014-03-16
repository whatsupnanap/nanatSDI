//alert("JavaScript works!");


//varioables
var symbols = "+-* or /";
var x = parseInt(prompt("enter your first number"));
var symbol = prompt("enter your symbol" + symbols);
var y = parseInt(prompt("enter your second number"));


if(isNaN(x)){
	console.log("put number x"); 
}else if (isNaN(y == 0)){
//}else if (isNaN(y) && y == 0){
	console.log("put number y");
}else{
	console.log("The equation that you chose is" + x + symbol + y );
};

if(symbol === "/"){
	console.log("you entered " + symbol);
}else if (symbol === "+"){
	console.log("you entered " + symbol);
}else if (symbol === "-"){
	console.log("you entered " + symbol);
}else if (symbol === "*"){
	console.log("you entered " + symbol);
}else{
	console.log("need to put symbols + - * OR / " + symbol);
};

//my functions
function myFunctionAdd(x,tasu,y){
	if(symbol == "+") {
		console.log(x + y);
	}
}

function myFunctionSub(x,hiku,y){
	if(symbol == "-") {
		console.log(x - y);
	}	

}

function myFunctionTim(x,kakeru,y){
	if(symbol == "*") {
		console.log(x * y);
	}
}

function myFunctionDev(x,waru,y){
	if(symbol == "/" && y > 0) {
		console.log(x / y);
	}else{
		console.log("please enter valid number for y.");
	};	
}



myFunctionAdd(x,symbol,y);

myFunctionSub(x,symbol,y);

myFunctionTim(x,symbol,y);

myFunctionDev(x,symbol,y);

