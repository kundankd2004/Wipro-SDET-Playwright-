// Nested Functions Call Order

function first() {
    console.log("First function");
    second();
}

function second() {
    console.log("Second function");
    third();
}

function third() {
    console.log("Third function");
}

first();

// Recursive Factorial Function

function factorial(n) {
    if (n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

// Recursive Fibonacci Function

function fibonacci(n) {

    if (n <= 1) {
        return n;
    }
    
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Output: 8

// Stack Overflow Simulation

function infiniteRecursion() {

    console.log("Running...");

    infiniteRecursion();
}

// Uncommenting the line below will cause a stack overflow error
// infiniteRecursion();

// Call Stack Flow Diagram

/*
Call Stack Flow:

first()
   ↓
second()
   ↓
third()

third() finishes
   ↑
second() finishes
   ↑
first() finishes


FACTORIAL CALL STACK

factorial(5)
   ↓
factorial(4)
   ↓
factorial(3)
   ↓
factorial(2)
   ↓
factorial(1)

Returns:
1 → 2 → 6 → 24 → 120

*/