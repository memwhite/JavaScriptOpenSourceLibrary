//shift removes the first item in an array and then returns just that item it removed
//going forward, the array will print with that first item removed


var meals = ['breakfast', 'elevensies', 'lunch', 'dinner', 'second dinner'];
console.log(meals); //returns: [ 'breakfast', 'elevensies', 'lunch', 'dinner', 'second dinner' ]

var mealsMinusOne = meals.shift();
console.log(mealsMinusOne); //returns: breakfast

console.log(meals); //returns: [ 'elevensies', 'lunch', 'dinner', 'second dinner' ]

