// Random number between 1 and 100

let randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("Random number: " + randomNumber);

//Check prime number

let num1 = 17;
let isPrime = true;

if (num1 <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num1); i++) {
        if (num1 % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(num1 + " is a prime number.");
} else {
    console.log(num1 + " is not a prime number.");
}

// Factorial using loop

let num2 = 5;
let factorial = 1;

for (let i = 1; i <= num2; i++) {
    factorial *= i;
}
console.log("Factorial of: " , factorial);

//Fibonacci series

let n = 10;
let first = 0;
let second = 1;
console.log("Fibonacci series: ");

for (let i = 1; i <= n; i++) {
    console.log(first);
    let next = first + second;
    first = second;
    second = next;
}

//Armstrong number

let number = 153;
let originalNumber = number;
let sum = 0;

while (number > 0) {
    let digit = number % 10;
    sum += Math.pow(digit, 3);
    number = Math.floor(number / 10);
}

if (sum === originalNumber) {
    console.log(originalNumber + " is an Armstrong number.");
} else {
    console.log(originalNumber + " is not an Armstrong number.");
}