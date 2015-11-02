/*
    Interfaces in Typescript are real key. The biggest use of interfaces as we see:

    1: Defining the type/shape of a function
    
    2: Defining the type of an object. That means all its properties, return types, etc
    
    3: Defining the the "Return" type of objects. Using functions, we can describe the return type of
    the function object, which can be used to create API patterns.

*/
// canVote implements votingEligibility. F
// it is used as a function
var canVote = function (cAge, vAge) {
    if (cAge > vAge) {
        return true;
    }
    else {
        return false;
    }
};
// Do not use fat arrow here to define the function as it captures
// this from the nearest lexical scope. I am calling Amay.greet() from
// the window, so fat arrow gives this the value of window. 
var Amay = {
    name: 'Amay',
    age: 25,
    profession: 'Engineer',
    greet: function (msg) {
        return msg + this.name;
    },
    makeYounger: function (newAge) {
        if (newAge < this.age) {
            this.age = newAge;
        }
    }
};
// Return turpe of this function is of type Evaluator
// Keep in mind - this is not a Constructor function. This
// function only executes and returns a new object back
function ratingEvaluator() {
    var rating;
    // Add a rating to the rating array
    // : if defining using literal object
    var addRating = function (r) {
        if (!rating) {
            rating = new Array();
        }
        rating.push(r);
    };
    var calcRating = function () {
        var sum = 0;
        rating.forEach(function (v) {
            sum += v;
        });
        return sum / rating.length;
    };
    return {
        addRating: addRating,
        calcRating: calcRating
    };
}
// Call properties on Amay object to verify how things are working 
