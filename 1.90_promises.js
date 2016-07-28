//Promises

//Promises are a more efficient way to asyncronously code instead of 
//nesting callback after callback inside of each other

//Promises help organize call backs in a more manageable way

//Promise objects are essentially a placeholder for some future action that will
//be executed at another time 

window.onload = function(){

$.get("<insert path to data>").then(function(data){
	console.log(data);
	return $.get("<insert path to someMoreData>");
}).then(function(someMoreData){
	console.log(someMoreData);
	return $.get("<insert path to thirdSetOfData>");
}).then(function(thirdSetOfData){
	console.log(thirdSetOfData);
});

};


//the .then method is availble because we're working with promises 