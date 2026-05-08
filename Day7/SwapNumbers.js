let a = 10;
let b = 20;

a = a + b; // a now holds the sum of a and b
b = a - b;
a = a - b;

console.log("After swapping: a =", a, "b =", b);