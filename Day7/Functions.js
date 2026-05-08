//Greatest of three numbers

function greatestOfThree(a, b, c) {

    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log("Greatest Number: ", greatestOfThree(10, 20, 15));

//Check Palindrome Number

function isPalindrome(number) {

    let original = number;
    let reversed = 0;

    while (number > 0) {
        let digit = number % 10;
        reversed = (reversed * 10) + digit;
        number = Math.floor(number / 10);
    }

    return original === reversed;
}

console.log("Is Palindrome: ", isPalindrome(12321));

//Currency Converter Function

function currencyConverter(amount, rate) {
    return amount * rate;
}

let rupees = currencyConverter(100, 83);

console.log("Converted Amount in Rupees: ", rupees);

//Return Even Numbers from an Array

function getEvenNumbers(arr) {

    let evenNumbers = [];

    for (let num of arr) {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        }
    }

    return evenNumbers;
}

console.log("Even Numbers: ", getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

//Calculator using Functions

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

console.log("Addition: ", add(10, 5));
console.log("Subtraction: ", subtract(10, 5));
console.log("Multiplication: ", multiply(10, 5));
console.log("Division: ", divide(10, 5));