// setting objects

const person = {
    name: ['Joshua', 'Timothy'],
    age: 32,
    bio: function () {
        console.log (`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduction: function () {
        console.log (`Hi! My name is ${this.name[0]}.`);
    },
};

// changing the values of the previous data set

person.age = 17;
person['name'][0] = 'Israel';
person['color'] = 'Cyan';
person.farewell = function() {
    console.log('Bye for now!');
}

// Let's say we wanted users to be able to store custom value types in their people data,
// by typing the member name and value into two text inputs.
// We could get those values like this:

const myDataName = 'height';
const myDataValue = '1.75m';

person[myDataName] = myDataValue;

// Using the "this" keyword
const person1 = {
    name: 'Zack',
    introduction() {
      console.log(`Hi! I'm ${this.name}.`);
    }
  }
  
  const person2 = {
    name: 'Samuel',
    introduction() {
      console.log(`Hey! I'm ${this.name}.`);
    }
  }
// the "this" keyword refers to the current object the code is been written in.

// ############################################################################################

