//Reverse a string

let str1 = "JavaScript";
let reversed = "";

for (let i = str1.length - 1; i >= 0; i--) {
    reversed += str1[i];
}
console.log(reversed); // Output: "tpircSavaJ"

//Count the number of vowels in a string

let str2 = "Programming";
let vowel = "aeiouAEIOU";
let count = 0;

for (let char of str2) {
    if (vowel.includes(char)) {
        count++;
    }
}
console.log("Vowel count: " + count); // Output: "Vowel count: 3"

//Check if a string is a palindrome

let str3 = "madam";
let reversedStr3 = "";

for (let i = str3.length - 1; i >= 0; i--) {
    reversedStr3 += str3[i];
}

if (str3 === reversedStr3) {
    console.log(str3,"The string is a palindrome.");
}
else {
    console.log(str3,"The string is not a palindrome.");
}

//Capitalize the first letter

let sentence = "JavaScript is fun.";
let words = sentence.split(" ");
let capitalized = [];

for (let word of words) {
    capitalized.push(word[0].toUpperCase() + word.slice(1));
}
console.log("Capitalized sentence: " + capitalized.join(" ")); // Output: "JavaScript Is Fun."

//Find longest word in a string

let text = "JavaScript is a powerful language.";
let wordArray = text.split(" ");
let longestWord = "";

for (let word of wordArray) {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
}
console.log("Longest word: " + longestWord); // Output: "Longest word: JavaScript"
