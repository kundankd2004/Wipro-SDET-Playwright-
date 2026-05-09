// Double Numbers using Map()

let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map(num => num * 2);

console.log("Doubled Numbers: " , doubledNumbers);

// Filter Students with Grades above 80

let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 78 },
    { name: "Charlie", grade: 92 },
    { name: "David", grade: 65 }
];

let topStudents = students.filter(student => student.grade > 80);

console.log("Top Students: " , topStudents);

// Print Array using forEach()

let fruits = ["Apple", "Banana", "Cherry", "Date"];

fruits.forEach(fruit => {
    console.log(fruit)
});

//Convert Names into Uppercase

let names = ["alice", "bob", "charlie", "david"];

let upperCaseNames = names.map(name => name.toUpperCase());

console.log("Uppercase Names: " , upperCaseNames);

// Extract Even Numbers using Filter()

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = arr.filter(num => num % 2 === 0);

console.log("Even Numbers: " , evenNumbers);