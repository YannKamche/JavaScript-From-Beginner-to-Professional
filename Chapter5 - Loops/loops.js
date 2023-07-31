//Loops execute a code block a certain number of times
/* 1) While loops
Executes a block of code as long as an expression evaluates to true
 */
let i = 0;
while (i < 10) {
    console.log(i++);
}
// simple search
let someArray = ["Mike", "Antal", "Marc", "Emir", "Louiza", "Jacky"];
let notFound = true;
while (notFound && someArray.length > 0) { //Checks if array is not empty
    if(someArray[0] === "Louiza") {
        console.log("Found her");
        notFound = false;
    } else {
        someArray.shift();
    }
}
//Fibonnaci sequence using Loop
let nr1 = 0;
let nr2 = 1;
let temp;
fibonacciArray = [];
while(fibonacciArray.length < 10) {
    fibonacciArray.push(nr1);
    temp = nr1 + nr2;
    nr1 = nr2;
    nr2 = temp;
}
console.log(fibonacciArray);

/*2) Do While loops 
In some cases you need to execute the block of code at least once*/
let number;
do {
    number = prompt("Please enter a number between 0 and 100: ");
} while (!(number >= 0 && number < 100));

