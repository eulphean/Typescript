var mySquareFunction1 = function (a, b) { return a * b; };
// shorthand definition with lambda expression. Notice here I need the
// return keyword. Return isn't inferred
var mySquareFunction2 = function (a, b) { return a * b; };
var Area1 = function (rect) {
    return rect.l * rect.w;
};
// Shorthand definition with lambda expression. Notice here I don't need
// the return keyword. Return is inferred.
var Area2 = function (rect) { return rect.l * rect.w; };
// Using interface to create an object. This is not object literal
// by the way
var Arect = { l: 2, w: 3 };
