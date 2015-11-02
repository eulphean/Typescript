// Syntax for an object literal in Typescript
var myPerson;
var object = {
    id: "A124#",
    age: 25,
    phone: '6467615173',
    canVote: function (reqAge) {
        if (this.age > reqAge) {
            return true;
        }
        else {
            return false;
        }
    }
};
myPerson = { 'Amay': object };
/*var testObject: { key1: string, key2: string };

var myObject = new testObject;*/
console.log(myPerson);
