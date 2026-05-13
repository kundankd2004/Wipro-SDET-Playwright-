// Utility Type using Conditional Type + infer
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

// Examples
type Example1 = UnwrapPromise<Promise<string>>;
type Example2 = UnwrapPromise<Promise<number>>;
type Example3 = UnwrapPromise<boolean>;

// Variables for Testing
let value1: Example1 = "Hello TypeScript";
let value2: Example2 = 100;
let value3: Example3 = true;

console.log(value1);
console.log(value2);
console.log(value3);