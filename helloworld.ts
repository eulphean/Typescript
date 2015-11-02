interface Person {
	id: string, 
	age: number,
	phone: string,
	canVote(requiredAge: number):boolean
}


// Syntax for an object literal in Typescript
var myPerson : { [name: string] : Person};

var object: Person = {
	id: "A124#", 
	age: 25, 
	phone: '6467615173', 
	canVote(reqAge: number): boolean {
		
		if (this.age>reqAge){
			return true;
		}
		else {
			return false;
		}

	}
};

myPerson = { 'Amay': object};

/*var testObject: { key1: string, key2: string };

var myObject = new testObject;*/

console.log(myPerson);