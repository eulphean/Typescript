// Using Arrow definitions
// Application 1: To Specify return type on a function
var myFunction = function (arg) {
    return arg;
};
// Simplest version of the function
var squareItSimple = function (a, b) {
    return a * b;
};
// Application 2: To skip the return keyword in the function
var squareItSimpler = function (a, b) { return a * b; };
// function declaration with => used as return type
var squareItRect;
// function definition 
// since the function declaration declares the function parameter
// no need to re declare it
squareItRect = function (r) {
    return r.h * r.w;
};
var rectA = { h: 10, w: 20 };
console.log(squareItRect(rectA));
