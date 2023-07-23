/**
 * Objects in JavaScript
 Arrays are objects with indexed properties meanwhile objects
 are objects with named properties
 */
let car = {
    carName: "Hummer",
    releaseYear: 2013,
    price: "$14500",
    guaranteeInYears: 10
}; // We create a variable car 

//Two ways of accessing properties in an object
console.log(car["releaseYear"]);
console.log(car.releaseYear);

//Updating objects: We have two options
car["releaseYear"] = 2003;
car.guaranteeInYears = 20;
console.log(car);

