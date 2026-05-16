// Primitive Copyong Behavior
let a = 10;
let b = a;

b = 20;

console.log("a: " + a); // 10
console.log("b: " + b); // 20

// Object Reference Behavior

let person1 = {
    name: "Alice"
};

let person2 = person1;

person2.name = "Bob";

console.log("person1: " + person1.name); // Bob
console.log("person2: " + person2.name); // Bob

// Clone Object without Affecting Original

let student = {
    name: "Charlie",
    age: 25
};

let clonedStudent = { ...student };

clonedStudent.name = "David";

console.log("student: " + student.name); // Charlie
console.log("clonedStudent: " + clonedStudent.name); // David

// Compare Arrays using Reference Equality

let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

let arr3 = arr1;

console.log("arr1 === arr2: " + (arr1 === arr2)); // false
console.log("arr1 === arr3: " + (arr1 === arr3)); // true

// Shallow Copy using Spread Operator

let originalArray = [10, 20, 30];
let copiedArray = [...originalArray];

copiedArray.push(40);

console.log("originalArray: " + originalArray); // [10, 20, 30]
console.log("copiedArray: " + copiedArray); // [10, 20, 30, 40]