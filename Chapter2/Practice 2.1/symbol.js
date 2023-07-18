/**
 * The symbol datatype is used in cases where 
 * it is important that variables are not equal though they
 * might have the same value or datatype
 */

let str1 = "I love JavaScript";
let str2 = "I love JavaScript";

console.log(str1 === str2);

let sym1 = Symbol("I learn JavaScript");
let sym2 = Symbol("I learn JavaScript");

console.log(sym1 === sym2);

