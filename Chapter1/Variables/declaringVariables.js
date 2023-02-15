/*
Declaring Variable: There are three ways of declaring variables, which are using:
- let (block scope)
- var (global scope)
- const
*/
var myAge = "My age";
var myName = "My name";// Declaring variables using var

console.log(myName);
console.log(myAge);

let myHeight= "My height";
let myConstant= "My constant";

console.log(myConstant);
console.log(myHeight);// Declaring variables using let

const someConstant = 3;
//someConstant = 4;
console.log(someConstant);

/*WHen namimg a variable ensure the name is descriptive, 
starts with lowercase and contain no spaces */

//String: stores text value
let singleString = 'Single String';// single string
let doubleString = "Double String";// double string

//backstrip
let javaScript = "JavaScript"
message = `Let's learn ${javaScript}`;

console.log(singleString)
console.log(doubleString);
console.log(message);

