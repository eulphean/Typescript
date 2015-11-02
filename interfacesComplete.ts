/*
	Interfaces in Typescript are real key. The biggest use of interfaces as we see:

	1: Defining the type/shape of a function
	
	2: Defining the type of an object. That means all its properties, return types, etc
	
	3: Defining the the "Return" type of objects. Using functions, we can describe the return type of 
	the function object, which can be used to create API patterns. 

*/

// 1: Shape of a function
interface votingElibility {
	(currentAge: number, votingAge: number): boolean;
}

// canVote implements votingEligibility. F
// it is used as a function
var canVote: votingElibility = function (cAge, vAge){
	if (cAge > vAge) {
		return true;
	}
	else {
		return false;
	}
}
 
// Verify by calling canVote()


// 2: Shape of an Object
interface Person {
	name: string;
	age: number;
	profession: string;
	greet: (msg: string) => string;
	makeYounger: (newAge: number) => void;
}

// Do not use fat arrow here to define the function as it captures
// this from the nearest lexical scope. I am calling Amay.greet() from
// the window, so fat arrow gives this the value of window. 
var Amay: Person = {

	name: 'Amay',
	age: 25,
	profession: 'Engineer',
	greet: function (msg) { 
		return msg + this.name;
	},
	makeYounger: function(newAge) {
		if (newAge < this.age) {
			this.age = newAge;
		}
	}

}


// 3: Return type of a function object
interface Evaluator {
	addRating: (rating: number) => void;
	calcRating: () => number;	
}

// Return tyrpe of this function is of type Evaluator
// Keep in mind - this is NOT a Constructor function. This
// function only executes and returns a new object back. That is
// the entire purpose of this constructor function
function ratingEvaluator() : Evaluator {

	// this is given undefined value
	var rating: number[];

	// Add a rating to the rating array
	// : if defining using literal object
	var addRating = (r: number) => {
		
		// Check if rating is undefined
		if (!rating) {
			rating = new Array();
		}
		rating.push(r);
	}

	var calcRating = () => {
		var sum: number = 0;
		rating.forEach(function(v) {
			sum += v;
		});
		return sum / rating.length;
	}

	return {
		addRating: addRating,
		calcRating: calcRating
	}
}

// Call properties on Amay object to verify how things are working