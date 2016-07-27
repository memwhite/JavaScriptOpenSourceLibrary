//array.push is how you append items to an array
//appends items to the end of the array

var animals = ['dog', 'cat', 'mouse', 'bird'];
var dogs = ['beagle', 'lab', 'terrier', 'husky'];

var creatures = animals.push(dogs);

console.log(creatures); //returns the new length of the array
console.log(animals); //returns the animals array with the dogs array appended on the end



