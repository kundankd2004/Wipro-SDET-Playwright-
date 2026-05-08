// Delayed Greeting Message

setTimeout(() => {
    console.log("Hello! Welcome to the world of JavaScript!");
}, 2000); 

// Countdown Timer

let countdown = 5;

let timer = setInterval(() => {
    console.log("Countdown: " + countdown);
    countdown--;

    if (countdown < 0) {
        clearInterval(timer);
        console.log("Time's up!");
    }
}, 1000);

// Callback-based Calculator

function calculator(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

console.log("Addition: " + calculator(10, 5, add)); 
console.log("Multiplication: " + calculator(10, 5, multiply));

//Food Ordering System

function placeOrder(order, callback) {

    console.log("Order placed: " , order);

    setTimeout(() => {
        const orderStatus = "Order is being prepared";
        callback(orderStatus);
    }, 3000);
}

function orderReady(food) {
    console.log(food, "is ready!");
}

placeOrder("Pizza", orderReady);

//Sequential Function Execution

function firstTask(callback) {
    console.log("First task is being executed..."); 
    callback();
}

function secondTask(callback) {
    console.log("Second task is being executed...");
    callback();
}

function thirdTask() {
    console.log("Third task is being executed...");
}

firstTask(() => {
    secondTask(() => {
        thirdTask();
    });
});