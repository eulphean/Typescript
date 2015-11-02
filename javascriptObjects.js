// Understanding the javascript objects, new keyword, and prototype property

// Object literal format to create a new Javascript object instance
// A key value pair format to define a new object
// Clear and concise way to declare an object that rests in memory
var myObject = {
	// Defining individual properites of the object

	name: 'Amay',
	age: 25,
	canVote: function(requiredAge) {
		if (age > requiredAge) {
			return true;
		}
		else
		{
			return false;
		}
	}

};

console.log(myObject);

// Shallow copyn of myObject
// Any changes in myNewObject will be reflected in myObject
var myNewObject = myObject;


/*

This is not allowed as the 'new' keyword can only be used to instantiate a class. And a 
class like structure is provided by a function in Javascript. 

var myNewObject = new myObject;

*/

// Object literal definition makes like a static class. Only one static instance of that class
// actually lives in the memory

/*
	Functions are inherently objects in javascirpt. 
	Creating Function objects.

	Functions create Object Types (Class)

	A function with parameters is treated as a constructor function when it's called with a 'new'
	keyword
*/
// Class definition literal. This is completely different than object literal
var JPerson = function (name, age){

	// Defining individual members of the class

	this.name = name;
	this.age = age;

	this.canVote = function (requiredAge) {
		
		if (age > requiredAge) {
			return true;
		}
		else
		{
			return false;
		}

	}

}

// I can instantiate multiple objects now of the type NewPerson

var Amay = new JPerson ('Amay', 25);
var Ajat = new JPerson ('Ajat', 27);
var Abnash = new JPerson ('Abnash', 55);
var Neera = new JPerson ('Neera', 52);


