//Strings
//A string is a group of characters...they can be letters or numbers, and are surrounded by single or double quotes

var firstName = "Sherlock"
var lastName = "Holmes"

//This will return: Hello, Sherlock Holmes
console.log("Hello, " + firstName + " " + lastName);

//Concatenation is putting more than one string together
var one = "m"
var two = "e"
var three = "g" 
var four = "h" 
var five = "a"
var six = "n" 


var myName = (one + two + three + four + five + six);
console.log(myName) //this returns: meghan

//Strings can also be numbers, as long as they are in quotes
var areaCode = "317-";
var phone = "555-5555";

var phoneNumber = (areaCode +  phone);
console.log(phoneNumber); //this returns: 317-555-5555


