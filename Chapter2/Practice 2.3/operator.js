//Subtraction

let myNr = 20;
let myStr = "string";

console.log(myNr - myStr);

//Esponentiation
// We use ** to perform exponentiation in Javascript
let base = 2;
let power = 3
let exponentResult = base ** power;
console.log(exponentResult);

//Modulus
let myNr2 = 20;
let myNr3 = 3;
console.log(`${myNr2} % ${myNr3} =`, myNr2 % myNr3);

//Unary Operators (Prefix and Postfix Operators)
let prefixSum = 5;
console.log(prefixSum++); //logs variable before executing the increment
console.log(prefixSum);

let postfixSum = 6;
console.log(++postfixSum); //increments variable before logging
console.log(postfixSum);

//Operator Precedence
/**
 * When combingin operators , execution is done in a certain order
 1) Grouping ()
 2) Exponentiation
 3) Prefix increment and decrement
 4) Multiplication, division, modulus
 5) Addition and Subtraction
 */