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
console.log(Math.floor(Math.random() * 100) + 1);
let strnum = "5";
console.log(Number(strnum));
console.log(String(5));
let val = "0.6";
console.log(parseInt(val)); // 0
console.log(parseFloat(val)); // 0.6
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
console.log(colors.splice(0, 1));
console.log(colors.splice(1, 2));
console.log(colors.splice(1, 3));