//Functions//

//A function is basically an instruction packet for something you want to do in your code.
//The benefit of a function is you just have to write out the whole thing once, and then you can 
//use it throughout your code by calling back to that function by whatever you named it.
//Functions keep your code DRY, so you're not having to re-write a set of steps over and over again that you
//know you'll be using frequently.

function greeting(name){
	console.log("Hello, " + name + " it's nice to meet you.");
}

greeting("Meghan"); //this returns a greeting to whatever name you enter
greeting("Jon Snow");


function add(x, y){
	console.log(x + y);
}

add(4, 5); //returns 9
add(100 + 45);  //returns 145


//You can create a function to figure out how much your dinner would cost with different % tips

function dinnerPrice(price, tip){
	var totalTip = price * tip;
	var dinnerPrice = totalTip + price;
	return dinnerPrice;
}

dinnerPrice(45, .18); 