let intNr = 1; //integer number
let decNr = 1.5 // decimal numberr
let expNr = 1.4e15; // exponential number
let octNr = 0o10; // octal number. decimal version will be 8

console.log(expNr);
let hexNr = 0xFFFF //hexadecimal number (65535)
console.log(hexNr);
let binNr = 0b101;
console.log(binNr);

let hexNr2 = 0xf;// other representation
console.log(hexNr2);

let bigNr = 2324234234234234234n;//BigInt numbers are postfixed with an "n"
let result = bigNr + bigNr;
console.log(result); 

let bool1 = false;
let bool2 = true;
console.log(bool1); //Boolearn hold only two values
console.log(bool2);// either true or false

let unassigned; //Undefined since it does not have any value
console.log(unassigned);
console.log("unassigned", typeof unassigned);

let terribleThingToDo = undefined;

let binNr2 = 0b1000;
console.log(binNr2);
