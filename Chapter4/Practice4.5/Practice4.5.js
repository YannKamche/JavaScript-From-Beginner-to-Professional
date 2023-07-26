/* 1. Create a variable called prize  and use a prompt to ask the user
to set the value by selecting a number between 0 and 10
*/
let prize = prompt("Select a value between 0 and 10");

/*2. Convert the prompt response to a number data type*/
let prizeNumber = Number(prize);

/*3. Create a variable to use for the ouptut message containing the value
"My selection"*/
let outputMessage = "My Selection: ";

/*4 Using the switch statement (and creativity), provide a response
back regarding a prize that is awarded depending on what
number is selected
5. Use the switch break to add combined results for prizes.
*/
switch(prizeNumber) {
    case 0:
        console.log("You won a car!! Congratulations!");
        break;
    case 1:
        console.log("You won a bike!! Congratulations!");
        break;
    case 2:
        console.log("You won an umbrella!! Congratulations!");
        break;
    case 3:
        console.log("You won a book!! Congratulations!");
        break;
    case 4:
    case 5:
    case 6:
        console.log("You won a big 'house'!!");
        break;
    default:
        console.log("You lose !!!!\nTry again later");
        break;
}
/*6. Output the message back to the user by concatenating 
your prize variable strings
and the output message string 
*/
console.log(outputMessage.concat(prizeNumber));
