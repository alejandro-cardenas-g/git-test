const index = require('./index');
const { Dog } = require('./classes/dog');

const a = 1;
const b = 2;
const c = 3;

console.log(index.sumArgs(1,2,3));
console.log(index.subtractArgs(1,2,3));

const dog = new Dog('Doggy');
console.log(dog.name);
