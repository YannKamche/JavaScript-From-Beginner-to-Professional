/**
 Write some code to calculate the hypotenuse of a triangle using the
Pythagorean theorem when given the values of the other two sides.
The theorem specifies that the relation between the sides of a rightangled triangle is a^2 + b^2 = c^2.
 */

let base = prompt("Base: ");
let height = prompt("Height: ");

let hypotenuse;
hypotenuse = Math.floor(((base ** 2) + (height ** 2)) ** 0.5);

console.log(`base = ${base} \nheight = ${height}\nhypotenuse = ${hypotenuse}`);
