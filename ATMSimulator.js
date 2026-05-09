let balance = 5000;
let withdraw = 1000;

if (withdraw <= balance) {
    balance -= withdraw;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance:", balance);
} else {
    console.log("Insufficient Balance");
}