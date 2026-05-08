let a = 10;
let b = 20;

console.log("Before swap:", "a =", a, "b =", b);

// Swapping values
let temp = a;
a = b;
b = temp;

console.log("After swap:", "a =", a, "b =", b);
function checkType(input) {
    if (typeof input === "number") {
        console.log("This is a number");
    } else if (typeof input === "string") {
        console.log("This is a string");
    } else {
        console.log("Unknown type");
    }
}

// Examples
checkType(25);        // This is a number
checkType("Hello");   // This is a string
checkType(true);      // Unknown type