/**
 * Comparison Operators
 * The outcome of the comparison operators is always a Boolean
 * 
 */

//Equal
// The come in two flavors: equal value only, or equal value and data type
let x = 4;
let y = "4";
console.log(x == y); //Also known and loose equality
console.log(x === y); // Also known and strict equality

//Not equal
console.log(x != y);
console.log(x !== y);
//greater, less than or equal to
//Logical Operators

//Not is used to negate a boolean variable
let bool = true;
console.log(!bool);
console.log(!(x === y));
console.log(!(x == y));