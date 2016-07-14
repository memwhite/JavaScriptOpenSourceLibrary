//While Loops


//while loops will continue to iterate or loop through your code as long as it keeps returning something that is true

var age = 0;

while(age <= 18){
	console.log(age + ": " + "You need to be 18 to vote");
	age ++;
}
	console.log("Yay you're old enough to vote!");



//This will count by twos up to 100...it will also stop on numbers divisible by 5 and print a message

var countByTwos = 0;
while(countByTwos < 100){
	countByTwos += 2;
	if(countByTwos %  5 === 0){
		console.log(countByTwos + ": " + "I'm even and divisible by 5");
	} else {
		console.log(countByTwos);
	}
}

