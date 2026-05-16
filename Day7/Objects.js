// 1. Create an object for a student and display all properties dynamically

const student = {
    name: "Kundan",
    age: 21,
    course: "SDET"
};

console.log("Student Details:");
for (let key in student) {
    console.log(key + ":", student[key]);
}


// 2. Count number of keys in an object

const employee = {
    id: 101,
    name: "Rahul",
    salary: 50000
};

console.log("\nNumber of Keys:", Object.keys(employee).length);


// 3. Merge two objects into one

const obj1 = {
    a: 1,
    b: 2
};

const obj2 = {
    c: 3,
    d: 4
};

const mergedObject = { ...obj1, ...obj2 };

console.log("\nMerged Object:", mergedObject);


// 4. Convert an object into an array of keys and values

const product = {
    id: 1,
    name: "Laptop",
    price: 45000
};

console.log("\nKeys:", Object.keys(product));
console.log("Values:", Object.values(product));


// 5. Create a shopping cart object and calculate total bill amount

const cart = {
    mobile: 15000,
    headphones: 2000,
    charger: 1000
};

let total = 0;

for (let item in cart) {
    total += cart[item];
}

console.log("\nTotal Bill Amount:", total);