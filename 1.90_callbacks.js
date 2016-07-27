//Callback functions are also known as higher-order functions
//Definition: a function that is passed to another function as a parameter
//the callback function is called inside the other function
//Note: the callback function isn't executed immediately, it's called back on at
//some specified time in the containing function's body

var sherlockCast = ["Sherlock", "Watson", "Mary", "Mycroft", "Mrs. Hudson"];

sherlockCast.forEach(function(eachName, index){
	console.log(index + 1 + ". " + eachName);
});

//This will return:
//1. Sherlock
//2. Watson
//3. Mary
//4. Mycroft
//5. Mrs. Hudson 

