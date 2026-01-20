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
// % modulus (remainder)
// shift() move all elements in an array down by one index

//In class demo of arrays
	let colours = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "pink", "cyan", "magenta"];// array of colours
	colours[0] = "black";// changes "red" to "black".
	colours.push("white");// adds "white" to the end of the array.
	colours.splice(1,1);//removes "orange".
	colours.splice(1,1, "purple");// removes "yellow" and adds "purple".
	colours.pop();// removes "white".
	colours.shift();// removes "black".
	console.log(colours);// Logs the array.
	console.log(colours.length);// Logs the length of the array.

	for (let i = 0; i < colours.length; i++) {// For loop that logs each colour.
		console.log(colours[i]);
	}

//Excercise: Fruit Basket Manager
	let basket = ["apples", "bananas", "oranges", "grapes"];


	console.log(basket[0]); //Log the first fruit
	console.log(basket.length);

