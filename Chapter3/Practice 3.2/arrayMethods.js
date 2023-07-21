/**
 Methods are functions on a certain object, called to perform a
 specific action

  * Adding and Replacing elements
  */

 // push(): Adds an element to the end of the array and returns new length
let myFavoriteFruits = ["grapefruit", "orange", "lemon", "banana"];
let lengthOfFruits = myFavoriteFruits.push("pineapple");
console.log(myFavoriteFruits, lengthOfFruits);

//splice(): Adds elements at a certain index. It takes multiple parameters
//first parameter = index to start inserting
//second parameter = number of elements to be deleted starting from starting index
//Returns the deleted elements
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid"); //deletes no element
console.log(arrOfShapes);
let deletedElements = arrOfShapes.splice(2, 2, "hexagon", "heptagon"); //deletes square and trapezoid
console.log(arrOfShapes);
console.log(deletedElements);

//concat(): Used in concatinating values to existing objects
let myArray = [1, 3, 5];
let myConcatArray = myArray.concat(4, 6, 7);
console.log(myConcatArray);

//pop() : Removes the last element 
let lastElementShapes = arrOfShapes.pop();
console.log(lastElementShapes); // Last element of arrOfShapes

//shift(): Deletes the first element
let firstElementFruits = myFavoriteFruits.shift(); //removes the first element
console.log(firstElementFruits);
console.log(myFavoriteFruits);

//splice(): Deletes an/some elements specified by index
deletedArray = myConcatArray.splice(3, 3);
console.log(myConcatArray);
// 'delete' operator deletes a specified
delete deletedArray[0]; //Deletes first element of deletedArray

/**
 Finding Elements
 */

//find(): Checks a value in an array, returning undefined if not found
//What is found in the find method is actually a function
let findOrange = myFavoriteFruits.find(function(e) { return e === "orange"});
console.log(findOrange);
let findLemon = myFavoriteFruits.find(e => e === "lemon");
console.log(findLemon);

//indexOf(): returns the index on which the value is found.
//If the value is not found, it will return -1
let findIndexMango = myFavoriteFruits.indexOf("mango");
console.log(findIndexMango); 

//lastIndexOf(): Find the last occurence of an element in a list
let lastOccurenceOrange = myFavoriteFruits.lastIndexOf("orange");
console.log(lastOccurenceOrange); //logs '0' since orange exists only once

/**
 Sorting Elements
 */
//sort(): Sorts number from small to hight and strings A-Z
let names = ["James", "Alicia", "Faitha", "Paul", "John"];
let ages = [20, 10, 24 , 21, 17, 7];
console.log(names.sort()); //Sorts alphabetically
console.log(ages.sort());

/**
 Reversing Elements
 */
//reverse(): reverses any array irrespective of it sorted or not
let listOfCountries = ["Cameroon", "Ghana", "Nigeria", "South Africa"];
console.log(listOfCountries.find(e => e === "Cameroon"));
console.log(listOfCountries.reverse());



