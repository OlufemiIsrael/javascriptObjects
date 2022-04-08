// setting objects

const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    bio: function () {
        console.log (`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
        console.log (`Hi! I'm ${this.name[0]}.`);
    },
};

// changing the values of the previous data set

person.age = 17;
person['name'][0] = 'Israel';
person['eyes'] = 'hazel';
person.farewell = function() {
    console.log('Bye everybody!');
}

// Let's say we wanted users to be able to store custom value types in their people data,
// by typing the member name and value into two text inputs.
// We could get those values like this:

const myDataName = 'height';
const myDataValue = '1.75m';

person[myDataName] = myDataValue;
