// Convert JSON string to JavaScript object

let jsonString = '{"name": "John", "age": 30, "city": "New York"}';

let obj = JSON.parse(jsonString);

console.log(obj.name); // Output: John

// Convert JavaScript object to JSON string

let student = {
    name: "Alice",
    age: 25,
    city: "Los Angeles"
};

let studentJson = JSON.stringify(student);

console.log(studentJson); // Output: {"name":"Alice","age":25,"city":"Los Angeles"}

// Parse API-like JSON Data

let apiData = `{
    "id": 101,
    "name": "Bob",
    "email": "bob@example.com"
}`;

let user = JSON.parse(apiData);

console.log(user.id); // Output: 101
console.log(user.name); // Output: Bob
console.log(user.email); // Output: bob@example.com

// JSON Array of Employees Records

let employeesJson = [
    {
        "id": 1,
        "name": "Alice",
        salary: 50000
    },
    {
        "id": 2,
        "name": "Bob",
        salary: 60000
    },
    {
        "id": 3,
        "name": "Charlie",
        salary: 55000
    }
];

console.log(employeesJson[0].name); // Output: Alice

//Filter JSON Data

let filteredEmployees = employeesJson.filter(employee => employee.salary > 55000);

console.log(filteredEmployees); // Output: [{id: 2, name: "Bob", salary: 60000}]