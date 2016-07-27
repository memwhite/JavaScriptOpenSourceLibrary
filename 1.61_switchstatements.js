//A switch statement evaluates an expression and tries to match
//the expression's value with one of the case labels
//If a match is found, it will execute the directions below that case
//the break statements, cause it to break out of the list of cases after it's found a match
//if it doesn't find a match, it executes the default statement (or the final case if the default is missing)


//It won't work if you run both of these at the same time, but these are two examples:

var dogtype = "Boxer";  //Sorry I didn't list Boxer, are you sure it's really a type of dog?
						//Are there any dogs I forget to include?


var dogtype = "Golden Retriever"; //Goldens are loyal
								//Are there any dogs I forget to include?


switch(dogtype){
	case "Golden Retriever":
		console.log("Goldens are loyal");
		break;
	case "Labradors":
		console.log("Labs are great retievers");
		break;
	case "Poodles":
		console.log("Poodles are smart");
		break;
	case "Bloodhound":
		console.log("Bloodhounds have an excellent sense of smell");
		break;
	case "Beagle":
		console.log("Beagles are popular family dogs");
		break;
	default:
		console.log("Sorry I didn't list " + dogtype + ", are you sure it's really a type of dog?");

}

console.log("Are there any dogs I forget to include?");



