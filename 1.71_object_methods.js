//Object Methods
//Methods are functions inside an Object

// The this. keyword points back to that part of the object that's named after (this.)

var sherlockCast = {
	//properties
	name		: "Sherlock Holmes",  //must have a comma after every property except the final one
	age			: 40,
	vocation	: "consulting detective",
	married		: false,
	address		: "122B Baker Street",
//you can add as many properties as you'd like
	//method
	greeting	: function(){
		console.log("Hello, I am " + this.name + ", and I am a " + this.vocation);
	},
	findMe		: function(){
		console.log("You can find me at " + this.address);
	}
};

sherlockCast.greeting(); //this will return what's in the greeting function
sherlockCast.findMe(); //this will return what's in the findMe function