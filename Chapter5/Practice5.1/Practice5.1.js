//Number guessing game
/*1. Create a variable to be used as the max value for the number
*/
let maxValue = 1;

/*2. Generate a random number for the solution using Math.random()
and Math.floor() . You will also need to add 1 so that the value is
returned as 1-[whatever the set max value is]. You can log this
value to the console for development to see the value as you
create the game, then when the game is complete you can
comment out this console output*/
let guess = Math.floor(Math.random()) + 1;

