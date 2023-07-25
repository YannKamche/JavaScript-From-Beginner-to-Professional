//1. Create a prompt to ask the user's age
let ageString = prompt("Enter your age ");

//2. Convert the response from the prompt to a number
let age = Number(ageString);
//3. Declare a message variable that you will use to hold the 
//console message for the use
let message;

/*4. If the input age is equal to or greater that 21, set the
message variable to confirm entry to a venue and the ability
to purchase alcohol */
if (age >= 21) {
    message = "Your entry is valid, and you can purchase alcohol";
}
/*5. If the input age is equal to or greater than 19, set the message 
variable to confirm entry to the venue but deny the purchase of alcohol
*/
else if (age >= 19) {
    message = "Your entry is confirmed, but you can't purchase alcohol"
}
/*6 Provide a default else statement to set the message variable
to deny entry if none are true
*/
else {
    message = "entry denied";
}
//7. Output the response message variable to the console
console.log(message);