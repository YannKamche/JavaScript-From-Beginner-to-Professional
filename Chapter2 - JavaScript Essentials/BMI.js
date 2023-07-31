/**
 * Project 1
 Miles-to-kilometers converter
Create a variable that contains a value in miles, convert it to
kilometers, and log the value in kilometers in the following format:
The distance of 130 kms is equal to 209.2142 miles
For reference, 1 mile equals 1.60934 kilometers.

* Project 2
BMI calculator
Set values for height in inches and weight in pounds, then convert
the values to centimeters and kilos, outpuĴing the results to the
console:
1 inch is equal to 2.54 cm
2.2046 pounds is equal to 1 kilo
Output the results. Then, calculate and log the BMI: this is equal to
weight (in kilos) divided by squared height (in meters). Output the
results to the console.
 */

//Miles-to-kilometers converter
let distanceMiles = 209.2142;
console.log("The distance of " + 209.2142 / 1.60934 + " kms is equal to " + distanceMiles);

//BMI calculator
let height = 1;
let weight = 2.2045;

console.log("BMI is equal to " + Math.round(weight/2.2045)/ (height * (2.54 * 10 ** -2) ** 2 ));
