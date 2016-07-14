//Conditionals

10 === 10; //returns True because 10 is equal to 10
10 != 10; //returns False because 10 is != (not equal) to 10

// && - this indicates AND
// || - this indicates OR

23 > 100 && 45 < 100; //this will return false because BOTH expressions have to be true to return true
23 > 100 || 45 < 100; //this will return true because only one of the expressions have to be true to return true 

var chelseaGoals = 5;
var arsenalGoals = 0;

if (chelseaGoals > arsenalGoals){
	console.log("Chelsea win!!");
}else{
	console.log("This won't happen because Arsenal never beat Chelsea");
}