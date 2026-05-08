// COnvert Normal function to Arrow Function

// Normal Function
function add(a, b) {
    return a + b;
}

console.log("Normal Function: " + add(10, 5));
// Arrow Function
const addArrow = (a, b) => {
    return a + b;
};

console.log("Arrow Function: " + addArrow(10, 5));

// One Line Arrow Function

const square = num => num * num;

console.log("Square: " + square(6));

// Arrow Function with map()
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log("Doubled: " + doubled);

// Even/Odd Checker

const checkEvenOdd = num =>
    num % 2 === 0 ? "Even" : "Odd";

console.log("Check Even/Odd: " + checkEvenOdd(10));
console.log("Check Even/Odd: " + checkEvenOdd(7));

// Student Grade Calculator

const calculateGrade = score => {

    if (score >= 95) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
};

console.log("Grade: " + calculateGrade(95));