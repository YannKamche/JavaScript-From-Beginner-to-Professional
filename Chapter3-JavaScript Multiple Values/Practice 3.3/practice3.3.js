//1. Create an array containing three values: 1, 2, and 3.
let array = [1, 2, 3];

//2. Nest the original array into a new array three times.
let nestedArray = [array, array, array];
console.log(nestedArray);

//3. Output the value 3 from one of the arrays into the console.
console.log(nestedArray[1][2]);