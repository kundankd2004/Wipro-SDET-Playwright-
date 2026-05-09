// Stack Memory Behaviour

let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

// Heap Memory Behaviour

let obj1 = { 
    name: "Alice"
};

let obj2 = obj1;

obj2.name = "Bob";

console.log(obj1.name); // Bob
console.log(obj2.name); // Bob

// Object Mutation through reference

let car1 = {
    brand: "Toyota",
    model: "Corolla"
};

let car2 = car1;

car2.model = "Camry";

console.log(car1.model);
console.log(car2.model);

// Predict Output Example

let x = [1, 2, 3];
let y = x;

y.push(4);

console.log(x);
console.log(y);

// Memory Allocation Diagram

/*

Stack Memory:
| Variable | Value |
|----------|-------|
| a        | 10    |
| b        | 20    |

Heap Memory:

obj1 ----┐
         │
obj2 ----┘ ---> { name: "Amit" }


ARRAY REFERENCE
----------------
a ------┐
        │
b ------┘ ---> [1, 2, 3, 4]
*/