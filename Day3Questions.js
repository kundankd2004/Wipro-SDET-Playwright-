//Logging Names (forEach)
const names = ['Alice', 'Bob', 'Charlie'];

names.forEach(name => {
  console.log("Hello, " + name);
});

//Temperature Conversion (map)
const temps = [0, 10, 20, 30];

const fahrenheit = temps.map(c => c * 1.8 + 32);

console.log(fahrenheit);

//Data Filtering
const users = [
  { name: 'Li', age: 16 },
  { name: 'Dan', age: 22 },
  { name: 'Sarah', age: 17 }
];

const adults = users.filter(user => user.age >= 18);

console.log(adults);

//String Lengths
function longStrings(arr) {
  return arr.filter(str => str.length > 5);
}

console.log(longStrings(["hello", "javascript", "world", "coding"]));

//Reduce Power
const prices = [19.99, 5.50, 3.99, 25.00];

const total = prices.reduce((sum, price) => sum + price, 0);

console.log(total);

//Counting Occurrences
const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];

const count = fruits.reduce((acc, item) => {
  if (item === 'apple') acc++;
  return acc;
}, 0);

console.log(count);

//Chaining Methods Advanced
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * num);

console.log(result);

//Extract Titles
const products = [
  { id: 1, title: 'Laptop' },
  { id: 2, title: 'Mouse' }
];

const titles = products.map(p => p.title);

console.log(titles);

//Average Score Logic Challenges
const scores = [80, 90, 70, 100];

const avg = scores.reduce((sum, score) => sum + score, 0) / scores.length;

console.log(avg);

//Flattening Arrays
const nested = [[1, 2], [3, 4], [5, 6]];

const flat = nested.reduce((acc, arr) => acc.concat(arr), []);

console.log(flat);