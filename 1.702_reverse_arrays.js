//The .reverse command will reverse the order of an array
//If you use it in conjunction with the .join('') command, you can basically concat the array together


var myName = ['m', 'e', 'g', 'h', 'a', 'n'];
console.log(myName); //returns the array [ 'm', 'e', 'g', 'h', 'a', 'n' ]

var revMyName = myName.reverse();
console.log(revMyName); //returns the array [ 'n', 'a', 'h', 'g', 'e', 'm' ]

var joingrevMyName = revMyName.join('');
console.log(joingrevMyName); //returns the string: nahgem

