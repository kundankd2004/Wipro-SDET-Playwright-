// Student object and Display Properties

let student = {
    name: "John Doe",
    age: 20,
    grade: "A",
    isEnrolled: true
};

for (let key in student) {
    console.log(key + ": " + student[key]);
}

//Count Number of Keys

let employee = {
    id: 123,
    name: "Alice Smith",
    department: "HR",
    salary: 50000
};

let keyCount = Object.keys(employee).length;
console.log("Number of keys in employee object: " + keyCount);

//Merge Two Objects

let obj1 = { 
    name: "Bob", 
    age: 30 
};

let obj2 = { 
    city: "New York", 
    profession: "Developer" 
};

let mergedObj = { ...obj1, ...obj2 };

console.log("Merged Object:", mergedObj);

//Convert Object to Array

let person = {
    name: "Alice",
    age: 25,
    city: "Los Angeles"
};

let keys = Object.keys(person);
let values = Object.values(person);

console.log("Keys:", keys);
console.log("Values:", values);

//Shopping Cart Total Bill

let cart = {
    mobile: 15000,
    laptop: 20000,
    tablet: 10000
};

let totalBill = 0;
for (let item in cart) {
    totalBill += cart[item];
}

console.log("Total Bill: " + totalBill);