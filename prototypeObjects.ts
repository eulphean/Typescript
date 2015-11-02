/* 
	- Rectangle is the Constructor function
	- Rectangle.prototype is the Prototype object 
*/
var Rectangle = function(w: number, l: number) {
	this.width = w;
	this.length = l;
};

/*
	- Any new instance of type Rectangle is inheriting the properties 
	of Redtangle.prototype, which is the prototype object of the Rectangle 
	constructor function object. All functions are objects. 
*/
var rect1 = new Rectangle(2, 4);

// Adding a new method to the prototype object of Rectangle constructor function
// Now this method will be reflected inside any instance of Rectangle object
Rectangle.prototype.surfaceArea = function() {
	return this.width * this.length;
}

// Similarly above
Rectangle.prototype.perimeter = function() {
	return this.width * 2 + this.length * 2;
}