let a = "KunDan";
let b = "Rahul";
let c = "Guddu";
let d = "Hello " + a +" , " + b + " and " + c + "!";
let e = `Hello ${a}, ${b} and ${c}!`;
let f = `The length of a is ${a.length * 2}`;
function table(num){
    let result = "";
    for(let i = 1; i <= 10; i++){
        result += `${num} x ${i} = ${num * i}\n`;
    }
    return result;
}
let sum = (x, y) => x + y;
console.log("Sum of 5 and 10 is: " + sum(5, 10));
let arr = [1, 2, 3, 4, 5];
arr.filter(x=> typeof x === "number").map(y => y * 2).forEach(z => console.log(z));
console.log(Math.floor(Math.random() * 100) + 1); // 1 to 100
// floor -> rounds down to the nearest integer 0.9 --> 0
// 0 --> 99.999 -> 99 [0 - 99]

// Math.random --> 0 - 1 * 10 --> 0 - 10
// Math.floor(x) --> 0.3 (0, 1) = 0, 1.6 (1, 2) = 1, 3.998 (3, 4) = 3
// floor(0.1, 9.999) -> [0, 9]

// == / ===
// console.log(5 == "5"); 
// console.log(5 === "5");

let strnum = "5";
console.log(Number(strnum));
console.log(String(5));

let val = "0.6";
console.log(parseInt(val)); // 0
console.log(parseFloat(val)); // 0.6

// floor [int] -> Low int, parseInt -> type conversion (string -> int)
let colors = ["red", "green", "blue"];
console.log(colors.indexOf("yellow")); // -1
console.log(colors.includes("yellow")); // false
console.log(colors.length); // 3
console.log(colors[3]); // undefined
console.log(colors[colors.length - 1]); // "blue"
colors.push("yellow"); // Adds "yellow" to the end of the array
console.log(colors); // ["red", "green", "blue", "yellow"]
colors.pop(); // Removes the last element ("yellow")
console.log(colors); // ["red", "green", "blue"]
colors.unshift("purple"); // Adds "purple" to the beginning of the array
console.log(colors); // ["purple", "red", "green", "blue"]
colors.shift(); // Removes the first element ("purple")
console.log(colors); // ["red", "green", "blue"]
// [red] [green] [blue] --> undefined

// let indexOf = "yellow";
// for (let i = 0; i < colors.length; i++) {
//     if(colors[i] === indexOf) {
//         return i;
//     } if(i == colors.length - 1) {
//         return -1;
//     }
// }

// remove by index, obj, [1, length - 2] --> math.random() * (length - 2)
console.log(colors.splice(0, 1));
console.log(colors.splice(1, 2));
console.log(colors.splice(1, 3));
// console.log(colors.splice(Math.floor(Math.random() * (colors.length - 2)), 1));
// let str = "Hello World";
// console.log(str.slice(0, 5)); // "Hello"