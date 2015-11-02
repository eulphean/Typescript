// Create a functional class

var TPerson = function(name: string, age: number) {
	this.name = name;
	this.age = age;
	this.canVote = function(requiredAge: number) {

		if (this.age > requiredAge) {
			return true;
		}
		else {
			return false;
		}

	}
};

// These are OBJECTS of type TPerson
var TAmay = new TPerson('Amay', 25);
var TAjat = new TPerson('Ajat', 27);
var TAbnash = new TPerson('Abnash', 55);
var TNeera = new TPerson('Neera', 52);


/*
	Creating an object type for the above using Interfaces
*/

// Interface - Used to define the shape for objects, classes, functions, parameteres, etc
interface IPerson {
	name: string,
	age: number,
	canVote(n: number): boolean
}

var IAmay: IPerson;

// OBJECT LITERAL format to leverage the interface and create an object
// Observe the use of the => to capture this in the funtion for the current object. 
// This is an OBJECT type
IAmay = {
	name: 'Amay', age: 25, canVote: (n: number) => { 
		if (this.age > n) { 
			return true; 
		} 
		else { 
			return false; 
		} 
	}
};

