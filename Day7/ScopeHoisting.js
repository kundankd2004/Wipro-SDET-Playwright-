//Variable Hoisting Example

console.log(x); // Output: undefined (due to hoisting)

var x = 5;

console.log(x); // Output: 5

//Block Scope Example

{
    let message = "Hello from block";
    console.log(message); // Accessible here
}
// console.log(message); // Uncaught ReferenceError: message is not defined (not accessible here)
// Error occurs because 'message' is block-scoped and cannot be accessed outside the block.

//Closure Example

function outerFunction() {
    let counter = 0;
    return function innerFunction() {
        counter++;
        console.log("Counter: " + counter);
    };
}

let count = outerFunction();
count(); // Output: Counter: 1
count(); // Output: Counter: 2
count(); // Output: Counter: 3

// Nested Functions

function parent() {
    let parentVar = "I am the parent variable";

    function child() {
        console.log(parentVar); // Accessing parent variable
    }
    child();
}
parent(); // Output: I am the parent variable

//Incorrect Variable Scoping Debug

/*
function test() {

if (true) {
    var a = 100;
}

console.log(a);
}

test();
*/

//Corrected Variable Scoping

function test() {
    if (true) {
        let a = 100;
        console.log(a);
    }
    // console.log(a); // Uncaught ReferenceError: a is not defined (not accessible here)
    // Error occurs because 'a' is block-scoped and cannot be accessed outside the block.
}
test(); 