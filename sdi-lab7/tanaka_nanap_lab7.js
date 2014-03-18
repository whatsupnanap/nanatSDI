//alert("JavaScript works!");
console.log("Looking for a minion?");
console.log("which minion do you want?? We got 3 minios available!");


//jsondata 
var jsonData = {
	"minions":
	[
		{
			"Name": "Dave",
			"Eyes": 2,
			"Hair": "Center parted",
			"Loves": "Rockets",
			"Height": 105
		},
		{
			"Name": "Stuart",
			"Eyes": 1,
			"Hair": "Center parted",
			"Loves":"playing",
			"Height": 94
		},
		{
			"Name": "Jorge",
			"Eyes": 2,
			"Hair": "standing staight up",
			"Loves": "making copies",
			"Height": 96
		}
	
	]
};


//functions
var objConstructor = function(minionName,minionHair,minionLoves,minionEyes,minionHeight){
	
	
	
	this.Name = minionName;
	this.Hair = minionHair;
	this.Loves = minionLoves;
	this.Eyes = minionEyes;
	this.Height = minionHeight;
	this.sold = false;
	this.sellMinion = function(){
		this.sold = false;
	}
	
};

//another function
var minions = function(){

//for loop	
	for(var i = 0; i < jsonData.minions.length; i++){
		
		var firstMinionObj = new objConstructor(jsonData.minions[i].Name, jsonData.minions[i].Hair, jsonData.minions[i].Loves, jsonData.minions[i].Eyes, jsonData.minions[i].Height);
		firstMinionObj.sellMinion();
		
		
		console.log("You found " + firstMinionObj.Name + " with " + firstMinionObj.Eyes + " eye(s), " + firstMinionObj.Hair + " hair styled, " + firstMinionObj.Height + "cm tall!!!" );
		
	};
};


minions();
