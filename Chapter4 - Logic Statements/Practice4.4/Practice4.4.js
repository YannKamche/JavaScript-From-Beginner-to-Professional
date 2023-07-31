/*
Magic 8-Ball random answer generator
1. Start by seĴing a variable that gets a random value assigned to
it. The value is assigned by generating a random number 0-5, for
6 possible results. You can increase this number as you add
more results.
 */
let random = Math.floor(Math.random() * 5);

/*2. Create a prompt that can get a string value input from a user
that you can repeat back in the final output*/
let usersQuestion = prompt("Enter your question");

/*3. Create 6 responses using the switch statement, each assigned to
a different value from the random number generator.*/

/*4. Create a variable to hold the end response, which should be a
sentence printed for the user. You can assign different string
values for each case, assigning new values depending on the
results from the random value.*/
let endResponse;
switch(random) {
    case 0:
        endResponse = "We can't find an answer to your question";
        break;
    case 1:
        endResponse = "Make some research on the internet";
        break;
    case 2:
        endResponse = "Ask ChatGPT to help you";
        break;
    case 3:
        endResponse = "My database is limited to 2021.";
        break;
    case 4:
        endResponse = "Get some books and read";
        break;
    case 5:
        endResponse = "Seek for advice to any elder";
        break;
    default:
        endResponse = "Ask another question";
        break;
}
/*5. Output the user's original question plus the randomly selected
case response, to the console after the user enters their question. */
console.log(usersQuestion, endResponse);
