// Find Missing Number in Array

function findMissingNumber(arr, n) {
    let expectedSum = (n * (n + 1)) / 2;

    let actualSum = arr.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
}

let numbers = [1, 2, 4, 5];

console.log(findMissingNumber(numbers, 5)); // Output: 3

// Check whether two strings are anagrams

function checkAnagram(str1, str2) {
    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

console.log(checkAnagram("listen", "silent")); // Output: true

// Rotate Array by K Positions

function rotateArray(arr, k) {
    k = k % arr.length;

    return arr.slice(-k).concat(arr.slice(0, -k));
}

let arr1 = [1, 2, 3, 4, 5];

console.log(rotateArray(arr1, 2)); // Output: [4, 5, 1, 2, 3]

// Find dulpicate in Array

function findDuplicate(arr) {

    let duplicate = new Set();
    let seen = new Set();

    for (let num of arr) {
        if (seen.has(num) && !duplicate.includes(num)) {
            duplicate.push(num);
        }

        return duplicate;
    }

let arr2 = [1, 2, 3, 4, 2, 5, 1];

console.log(findDuplicate(arr2)); // Output: [1, 2]

// Flatten Nested Array manually

function flattenArray(arr) {

    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item));
        } else {
            result.push(item);
        }
    }

    return result;
}

let nestedArr = [1, [2, [3, 4], 5], 6];

console.log(flattenArray(nestedArr));