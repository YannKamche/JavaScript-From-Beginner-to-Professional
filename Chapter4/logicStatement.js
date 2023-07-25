/*-- If and If else statement--- */
let rain = true;
if(rain) {
    console.log("Take my Umbrella");
} else { // optional block which evaluates if the condition is false
    console.log('Leave it');
}

let age = 23;
if(age < 18) {
    console.log("Sorry!! You can't get in under 18");
} else {
    console.log("Welcome!");
}

/*-- Else if statement --*/
if (age < 3) {
    console.log("Access is free under three.");
} else if (age < 12) {
    console.log("With the child discount, the fee is 5 dollars");
} else if (age < 65) {
    console.log("A regular ticket costs 10 dollars.");
} else {
    console.log("A ticket is 7 dollars.");
}

/*--Conditional ternary operators--*/
age < 18 ? console.log("denied"): console.log("granted");

/*-- Switch Statement --*/
