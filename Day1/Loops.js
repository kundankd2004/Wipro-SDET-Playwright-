//Star Pyramid Pattern

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = '';

    for (let j = 1; j <= rows - i; j++) {
        pattern += ' ';
    }

    console.log(pattern);
}

//Multiplication Table 1 to 10

for (let i = 1; i <= 10; i++) {

    console.log("table of" , i);

    for (let j = 1; j <= 10; j++) {
        console.log(i, "x", j, "=", i * j);
    }
    console.log("--------------------");
}

//Sum of Even Numbers from 1 to 100

let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log("Sum of even numbers from 1 to 100 is:", sum);

//Prime Numbers from 1 to 100

console.log("Prime numbers from 1 to 100:");

for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}

//Number Guessing Game

let secretNumber = 7;
let guess = 0;

while (guess !== secretNumber) {
    guess++;
    console.log("Guessing number:", guess);

    if (guess === secretNumber) {
        console.log("Congratulations! You've guessed the secret number:");
    }
}