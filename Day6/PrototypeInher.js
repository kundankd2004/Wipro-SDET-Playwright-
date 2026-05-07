function person(name) {
    this.name = name;
}
person.prototype.sayHi = function() {
    console.log('Hello' + this.name);
}

const person1 = new person('Alice');
const person2 = new person('Bob');

person1.sayHi();
person2.sayHi();
console.log(Object.getPrototypeOf(person1) === person.prototype);
console.log(person1.sayHi === person2.sayHi);