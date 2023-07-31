let str = "Hello World";
let intNr = 6;
let bigNr = 123456790n;
let bool = true;
let sym = Symbol("unique");
let undef = undefined;
let unknown = null;

console.log(typeof str);
console.log(typeof intNr);
console.log(typeof bigNr);
console.log(typeof bool);
console.log(typeof sym)
console.log(typeof undef);
console.log(typeof unknown);

/**
 * Conversion methods in JavaScript
 */
let nrToStr = 6;
let strToNr = "23";
let strToBool = "I will always be true";

console.log(String(nrToStr));
console.log(Number(strToNr));
console.log(Boolean(strToBool));