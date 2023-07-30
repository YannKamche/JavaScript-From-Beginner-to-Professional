//Create a simple object with three items in it
let myCar = {
    name: "Ferrari",
    date: "20/12/2023",
    releaseYear: 2023
};
//Using the for in loop, get the properties names and values
//from the object and output them into the console
for (let prop in myCar) {
    console.log(prop, myCar[prop]);
}

//Create an array containing the same three items. Using
//either the for loop or the for in loop, output the values from
//array into the console.
let mycarArray = [
    firstCar = {
        name: "Audi",
        date: "29/01/2014",
        releaseYear: 2012
    }
];
mycarArray.push(myCar);
console.log(mycarArray);

//Looping over objects by converting to an array
let car = {
    model: "Golf",
    year: 1999,
    color: "black"
};
//Object.keys(nameOfObject) function converts an object to array
let carArray = Object.keys(car);
for (let prop of carArray) {
    console.log(prop);
}
//Object.values(nameOfObject) function loops over the values of the object
let valuesCar = Object.values(car);
for (let values of valuesCar) {
    console.log(values)
}
//Object.entries(nameOfObject) function loops over both array and object
console.log(Object.entries(car));
for (const [key, value] of Object.entries(car)) {
    console.log(key, ":", value);
}