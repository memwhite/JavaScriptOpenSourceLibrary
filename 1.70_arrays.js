//Arrays

//Arrays are a great way to store a list or group of items
//They can include strings, or integers, or both
//Arrays use square brackets []
//The first entry in an array is at position 0

var friendsCast = ["Monica", "Rachel", "Phoebe", "Joey", "Chandler", "Ross"]

//Accessing items in an array

console.log(friendsCast); //will access the entire array 
console.log(friendsCast[0]); //will print Monica's name
console.log(friendsCast.length); //will return the length of the array: 6


//Loop through an array
var animals = ["ox", "lion", "cheetah", "bear", "tiger", "shark"];

var animalNum = 0;

while(animalNum < animals.length){
	console.log(animals[animalNum])
	animalNum ++;
}