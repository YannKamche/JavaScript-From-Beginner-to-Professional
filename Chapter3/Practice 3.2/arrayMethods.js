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
// 'delete' operator deletes a specifid
delete deletedArray[0]; //Deletes first element of deletedArray
console.log(deletedArray);

/**
 Finding Elements
 */
//find(): Checks a value in an array, returning undefined if not found
