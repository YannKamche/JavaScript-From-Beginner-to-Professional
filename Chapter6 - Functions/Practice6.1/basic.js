// //Functions: It is a named block of code 
// function sayHello() { //function to greet any user
//     let you = prompt("What's your name? ");
//     console.log(`Hello ${you}`);
// }
// sayHello();

/*It is importat to note that the same way funcions
can contain variables, likewise variables can contain functions
in JavaScript */
let varContainingFunction = function () {
    let varInFunction = "I'm in a function. ";
    console.log("Hi there!", varInFunction );
};
varContainingFunction();

//Create a function taking two parameters, adds the 
//parameters together, and returns the result

function addTwoNumbers(num1, num2) {
    return num1 + num2;
};
console.log(addTwoNumbers(2, 4));
//Create a basic calculator
function miniCalculator(num1, num2, calc) {
    switch(calc) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        default:
            return num1 + num2;
            break;
    }
}
console.log(miniCalculator(2, 6, "+"));

//Default parameters
function moduloNumber (i = 3) {
    console.log(i % 2);
}
moduloNumber(); //Since no argument is passed, defautl argument = 3

/*Arrow functions
They are special way to send functions as parameters 
Format: 
        1) (param1, param2) => body of the function;
        2) () => body of the function;
        3) param => body of the function;
        4) (param1, param2) => {

        };
*/

let sayHello = () => console.log("Hello World");
sayHello();
let plusTwo = num => console.log(num + 2);
plusTwo(2);
let addNumbers = (x, y) => console.log(x + y);
addNumbers(2, 5);

