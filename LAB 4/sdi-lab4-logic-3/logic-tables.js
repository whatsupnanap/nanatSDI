//  nana tanaka
//  DATE:  3/11/2014
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators

var a = 0;
var p;
var q;
var r;

while(a < 8){
	p = confirm("First value:  Click OK for true or Cancel for false.");
	q = confirm("Second value:  Click OK for true or Cancel for false.");
	r = confirm("Third value: click OK for true or Cansel for false");
	
	if (p || (q||r)){
    	console.log("With " + p + " and " + q + ", the outcome is TRUE.");
	} else {
    	console.log("With " + p + " and " + q + ", the outcome is FALSE.");
	};
	
	a++;
}


