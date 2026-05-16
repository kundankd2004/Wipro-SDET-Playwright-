// Allowed Units
type Unit = "px" | "rem" | "vh";

// Template Literal Type
type MarginValue = `${number}${Unit}`;

// Valid Values
let margin1: MarginValue = "10px";
let margin2: MarginValue = "2rem";
let margin3: MarginValue = "50vh";

console.log(margin1);
console.log(margin2);
console.log(margin3);

// Invalid Values ❌
// let margin4: MarginValue = "px10";
// let margin5: MarginValue = "20em";
// let margin6: MarginValue = "hello";