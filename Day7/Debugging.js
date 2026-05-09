// Fix an Infinite Loop Issue

function infiniteLoopFix() {

    let i = 1;

    while (i <= 5) {

        console.log("Count:", i);

        i++; // Fixed
    }
}

infiniteLoopFix();

// Identify why undefined is returned

function addNumbers(a, b) {

    return a + b; // Fixed
}

console.log("Sum:", addNumbers(10, 20));

//DEBUG INCORRECT ARRAY SORTING

let numbers = [100, 25, 3, 45, 9];

numbers.sort((a, b) => a - b); // Fixed

console.log("Sorted Numbers:", numbers);

//RESOLVE SCOPE-RELATED VARIABLE ISSUES

function scopeIssue() {

    let message = "Hello JavaScript";

    console.log(message);
}

scopeIssue();

// FIX CALLBACK EXECUTION ORDER PROBLEM

function firstTask(callback) {

    setTimeout(() => {

        console.log("First Task Completed");

        callback();

    }, 1000);
}

function secondTask() {

    console.log("Second Task Completed");
}

firstTask(secondTask);