var friendsCast = {
	name: "",
	age: 0,
	occupation: "",
	married: true,
	livedInMainApt: true

};

//New object added to friendsCast

var joey = Object.create(friendsCast);
joey.name = "Joey";
joey.age = 35;
joey.occupation = "actor";
joey.married = false;
joey.livedInMainApt = false;
joey.catchPhrase = "How you doin?";

console.log(joey.occupation); //returns: actor
console.log(joey.married); //returns: false
console.log(joey.catchPhrase); //returns: How you doin?

delete joey.married;
delete joey.catchPhrase;

console.log(joey.married); //returns: true, becaues it reverts back to the prototype
console.log(joey.catchPhrase); //returns: undefined because it was not part of the original prototype