// Create a functional class
var _this = this;
var TPerson = function (name, age) {
    this.name = name;
    this.age = age;
    this.canVote = function (requiredAge) {
        if (this.age > requiredAge) {
            return true;
        }
        else {
            return false;
        }
    };
};
var TAmay = new TPerson('Amay', 25);
var TAjat = new TPerson('Ajat', 27);
var TAbnash = new TPerson('Abnash', 55);
var TNeera = new TPerson('Neera', 52);
var IAmay;
// Object literal to leverage the interface and create an object
// Observe the use of the => to capture this in the funtion for the current object. 
IAmay = {
    name: 'Amay', age: 25, canVote: function (n) {
        if (_this.age > n) {
            return true;
        }
        else {
            return false;
        }
    }
};
