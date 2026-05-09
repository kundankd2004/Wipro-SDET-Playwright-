// 1. Function that returns the greatest of three numbers

function greatestNumber(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log("Greatest Number:", greatestNumber(10, 25, 15));


// 2. Function to check whether a number is palindrome

function isPalindrome(num) {
    let original = num;
    let reverse = 0;

    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }

    return original === reverse;
}

console.log("\nIs Palindrome:", isPalindrome(121));


// 3. Reusable function for currency conversion

function convertCurrency(amount, rate) {
    return amount * rate;
}

console.log("\nCurrency Conversion:", convertCurrency(100, 83));


// 4. Function that accepts an array and returns only even numbers

function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log("\nEven Numbers:", getEvenNumbers([1, 2, 3, 4, 5, 6]));


// 5. Calculator using functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

console.log("\nAddition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));