//Promises

//Promises are a more efficient way to asyncronously code instead of 
//nesting callback after callback inside of each other

//Promises help organize call backs in a more manageable way

//Promise objects are essentially a placeholder for some future action that will
//be executed at another time 


var promise = get("<insert path to data>");

promise.then(function(data){
	console.log(data);
	return get("<insert path to someMoreData>");
}).then(function(someMoreData){
	console.log(someMoreData);
	return get("<insert path to thirdSetOfData>");
}).then(function(thirdSetOfData){
	console.log(thirdSetOfData);
}).catch(function(error){
	console.log(error);
});

//the .then and .catch methods are availble because we're working with promises 