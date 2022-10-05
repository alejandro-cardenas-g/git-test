const index = require('./index');
const { Friend } = require('./classes/class1');
const { Dog } = require('./classes/dog');

const a = 1;
const b = 2;
const c = 3;

console.log(index.sumArgs(1,2,3));
console.log(index.subtractArgs(1,2,3));
console.log(index.multiply(a,b));

const friend = new Friend('Carlos');
console.log(friend.name);

const dog = new Dog('Doggy');
console.log(dog.name);
