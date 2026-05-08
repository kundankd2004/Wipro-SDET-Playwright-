//Largest and Smallest Numbers

let arr1 = [12, 45, 7, 89, 23];
let largest = arr1[0];
let smallest = arr1[0];

for (let num of arr1) {
    if (num > largest) {
        largest = num;
    }

    if (num < smallest) {
        smallest = num;
    }
}
console.log("Largest number: " + largest);
console.log("Smallest number: " + smallest);

//Remove Duplicates Elements

let arr2 = [1, 2, 2, 3, 4, 4, 5];
let uniqueArr = [];

for (let num of arr2) {
    if (!uniqueArr.includes(num)) {
        uniqueArr.push(num);
    }
}
console.log("Array with duplicates removed: " , uniqueArr);

//Sort an Array without using sort() method

let arr3 = [5, 2, 8, 1, 9];

for (let i = 0; i < arr3.length - 1; i++) {
    for (let j = 0; j < arr3.length - i - 1; j++) {
        if (arr3[j] > arr3[j + 1]) {
            let temp = arr3[j];
            arr3[j] = arr3[j + 1];
            arr3[j + 1] = temp;
        }
    }
}
console.log("Sorted array: " , arr3);

//Second Largest Number

let arr4 = [10, 45, 67, 89, 67];

let firstLargest = -Infinity;
let secondLargest = -Infinity;

for (let num of arr4) {
    if (num > firstLargest) {
        secondLargest = firstLargest;
        firstLargest = num;
    } else if (num > secondLargest && num !== firstLargest) {
        secondLargest = num;
    }
}

console.log("Second largest number: " , secondLargest);

//Merge Two Arrays and Remove Duplicates

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
let mergedArray = [...array1, ...array2];
let uniqueMergedArray = [];

for (let num of mergedArray) {
    if (!uniqueMergedArray.includes(num)) {
        uniqueMergedArray.push(num);
    }
}
console.log("Merged array with duplicates removed: " , uniqueMergedArray);