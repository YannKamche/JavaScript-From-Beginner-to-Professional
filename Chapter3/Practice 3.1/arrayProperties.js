//Built-in length property
 //the length property returns the number of values that array has
 let colors = ["black", "orange", "pink"];
 let booleans = [true, false, false, true, true];
 let emptyArray = [];
 console.log(colors.length);
 console.log(booleans.length);
 console.log(emptyArray.length);

 //Using length to access the last element of the array
 lastElement = colors[colors.length - 1];
 console.log("Last element in colors is " + lastElement);

 /**
  Note that the length of array counts integer numbers starting
  from 0 up to the highest filled index. If there are elements in the 
  middle of the sequence that do not have value, they will still be counted
  */
 let numbers = [23, 45, 34]; // Array of 3 elements
 console.log(numbers.length)
numbers[5] = 234; //Add an element at index 5

console.log(numbers.length);
console.log(numbers);
console.log(typeof numbers[3]);