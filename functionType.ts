// Using Arrow definitions

// Application 1: To Specify return type on a function
var myFunction: (a:any) => any
	= function (arg) {
		return arg;
}

// Simplest version of the function
var squareItSimple = function(a: number, b: number) { 
	return a * b;
}

// Application 2: To skip the return keyword in the function
var squareItSimpler = (a: number, b: number) => a * b;

// function declaration with => used as return type
var squareItRect: (rect: { h: number, w: number }) => number;

// function definition 
// since the function declaration declares the function parameter
// no need to re declare it
squareItRect = function (r) {
	return r.h * r.w;
} 

var rectA = { h: 10, w: 20 };

// We expect 200 to be printed
console.log(squareItRect(rectA));