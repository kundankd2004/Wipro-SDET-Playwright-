let marks = [80, 70, 90, 60, 85];

let total = marks.reduce((sum, mark) => sum + mark, 0);

let average = total / marks.length;

console.log("Total Marks:", total);
console.log("Average:", average);

if (average >= 90) {
    console.log("Grade: A");
} else if (average >= 75) {
    console.log("Grade: B");
} else if (average >= 50) {
    console.log("Grade: C");
} else {
    console.log("Fail");
}