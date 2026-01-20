// Important Terms to Remember:
// {} function 
// [] array
// () parameters
// "" string
// translate(x,y) move the origin to x,y
// push() save the current drawing state
// pop() restore the previous drawing state
// .push() add to an array
// .pop() remove from an array
// % modulus (remainder) 23 % 2 = 1
// shift() move all elements in an array down by one index

//In class demo of arrays
	// let colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "pink", "cyan", "magenta"];// array of colours
	// colours[0] = "black";// changes "red" to "black".
	// colours.push("white");// adds "white" to the end of the array.
	// colours.splice(1,1);//removes "orange".
	// colours.splice(1,1, "purple");// removes "yellow" and adds "purple".
	// colours.pop();// removes "white".
	// colours.shift();// removes "black".
	// console.log(colours);// Logs the array.
	// console.log(colours.length);// Logs the length of the array.

	// for (let i = 0; i < colours.length; i++) {// For loop that logs each colour.
	// 	console.log(colours[i]);
	// }




/////////////////////////////////////////////////////////////////////////////////////////////////////////

//									Excercise: Fruit Basket Manager
	
	let basket = ["apples", "bananas", "oranges", "pears"];
	console.log(basket)

// Read
	console.log(basket[0]); //Log the first fruit "apples".
	console.log(basket[basket.length - 1]); //Log the last fruit "pears".

// Modify
	//Change "bananas" to "kiwis".
	basket[1] = "kiwis"; 

	//Remove the last fruit from the array.
	basket.pop();

	//add "mangos" to the start of an array.
	basket.unshift("mangos");

	//loop through the basket with fruit
	for (let i = 0; i < basket.length; i++) {
		console.log(basket[i]);
	}

	// Use a for loop to log every fruit in a format
	for (let i = 0; i < basket.length; i++) {
		console.log("Fruit " + (i + 1) + ": " + basket[i]);
	}

	//check if oranges is in the basket including index location
	let index = basket.indexOf("oranges");
	if (index !== -1) {
		console.log("Oranges found at index " + index);
	} else {
		console.log("Oranges not found");
	}	

//create
	//create a new array called citrus that only has the middle 2 fruits
	let citrus = basket.slice(1,3);	
	basket.slice(0,3); length/2 - 1, length/2 + 1
	console.log(citrus);