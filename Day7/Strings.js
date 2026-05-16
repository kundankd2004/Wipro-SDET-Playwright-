// 1. Reverse a string without using reverse()

let str = "JavaScript";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log("Reversed String:", reversed);


// 2. Count number of vowels in a string

let text = "Hello World";
let vowels = "aeiouAEIOU";
let count = 0;

for (let char of text) {
    if (vowels.includes(char)) {
        count++;
    }
}

console.log("\nVowel Count:", count);


// 3. Check whether a string is palindrome

let word = "madam";
let reverseWord = "";

for (let i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
}

if (word === reverseWord) {
    console.log("\nPalindrome String");
} else {
    console.log("\nNot a Palindrome");
}


// 4. Capitalize first letter of every word

let sentence = "welcome to javascript";
let words = sentence.split(" ");
let capitalizedSentence = "";

for (let w of words) {
    capitalizedSentence += w.charAt(0).toUpperCase() + w.slice(1) + " ";
}

console.log("\nCapitalized Sentence:", capitalizedSentence.trim());


// 5. Find the longest word in a sentence

let line = "JavaScript is a powerful programming language";
let wordArray = line.split(" ");
let longestWord = "";

for (let item of wordArray) {
    if (item.length > longestWord.length) {
        longestWord = item;
    }
}

console.log("\nLongest Word:", longestWord);