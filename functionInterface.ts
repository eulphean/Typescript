// Function interface
interface ISquare {
	// (Parameters: return Type)
	// Never use lambda expressions here until defining an object interface
	(a: number, b: number): number;
}

var mySquareFunction1: ISquare = function(a, b) { return a * b; }

// shorthand definition with lambda expression. Notice here I need the
// return keyword. Return isn't inferred
var mySquareFunction2: ISquare = (a, b) => { return a * b };

// Object interface. This is different than
// a function interface
interface Rectangle {
	l: number;
	w: number;
}

var Area1 = function (rect: Rectangle) {
	return rect.l * rect.w;
}

// Shorthand definition with lambda expression. Notice here I don't need
// the return keyword. Return is inferred.
var Area2 = (rect: Rectangle) =>  rect.l * rect.w; 

// Using an interface to create an object
var Arect: Rectangle = { l: 2, w: 3};


