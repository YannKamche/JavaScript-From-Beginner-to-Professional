/*ARROW FUNCTIONS : They are special way to send functions as parameters 
Format: 
        1) (param1, param2) => body of the function;
        2) () => body of the function;
        3) param => body of the function;
        4) (param1, param2) => {

        };
*/
// An arrow function to find the name "Peter" in a list of names
let listNames = ["John", "Paul", "Marie", "Sandra", "Peter", "Fany"];

//Confirms if a student's name is in the list
let findStudent = (name, list) => {
    (list.find(student => student === name)) ? console.log("Found") : console.log("Not found");
    
}
findStudent("John", listNames);
//forEach(): executes a certain function for every element in the array
listNames.forEach(name => console.log(name)); //For each student, print name

/*SPREAD OPERATOR: Spreads out the argument and is consisted of three dots*/
let addTwoNumbers = (x, y) => console.log(x + y);
let myNum = [2,4];
addTwoNumbers(...myNum); //spread operator avoids copying long array or string

/*REST PARAMETER: Similar to the spread operator but is used inside fxn parameter 
It allows you to send any argument and translate the rest in parameter arrays*/
let studentNameAgeCLass = (name, ...rest) => {
    console.log(name, rest);
};
studentNameAgeCLass("Peter", 12, "Class 5");

/*RETURNING FUNCTION VALUES  */
let subtractTwoNumbers = (x, y) => x - y; //one-line arrow fxn doesn't need "return"
let numbersToSubtract = [3, 6]
console.log(subtractTwoNumbers(...numbersToSubtract));
//var is function-scoped, let is block-scoped
//hoisting: using a var variable before it's been declared

/*IIFE: way of expressing a function so that it gets invoked immediately */
(() => {
    console.log("An IIFE function written in arrow notation");
}) ();

/* RECURSIVE FUNCTION
They are employed when you need to a call a function over and over*/

let factoriaNum = num => {
    if(num === 0) return 1;
    return num * factoriaNum(--num);
}
console.log(factoriaNum(0));

/*Anonymous function
These are functions with no names and can be invoked by using the variable name*/
let functionVariable = function () {
    console.log("not secret");
};
functionVariable();

//Function to count upto 10
let countUpToTen = count => {
    console.log(count++);
    if(count <= 10)
        countUpToTen(count);
};
countUpToTen(0);

/*Function Callbacks*/
let functionCallBack = (x) => { //Takes a function variable as parameter
    x();    
    console.log("I take a variable function as paramenter");
};
let argumentFunction = () => console.log("I am passed as argumemnt");
functionCallBack(argumentFunction);

let youGotThis = () => console.log("You are really well, keep coding!");
setTimeout(youGotThis, 2000) // Waits for 2000ms before executing the function
setInterval(youGotThis, 2000); //Repeatedly executes the function till you kill the program




