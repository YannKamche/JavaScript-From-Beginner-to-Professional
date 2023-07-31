//break: stops the loop and move to the code below it
let cars = [
    {
        model: "Golf",
        year: 1999,
        color: "black"
    },
    {
        model: "Picanto",
        year: 2020,
        color: "red"
    },
    {
        model: "Peugeot",
        year: 2020,
        color: "black"
    }
];
for (let i = 0; i < cars.length; i++) {
    if (cars[i].year >= 2020) {
        if (cars[i].color === "black") {
            console.log("I have found my new car: ", cars[i], i);
            break;
        }
    }
}
//it is best practice to use the condition of the loop to break out instead
let myAges = [ 20, 45, 21, 10, 19, 34];
let notFound = true;

while (notFound && myAges.length > 0) {
    if (myAges[0] == '19') {
        console.log(myAges[0]);
        console.log(myAges);
        notFound = false;
    } else {
        myAges.shift();
    }
}

//continue: Can be used to move on to the next iteration of the loop
for (let car of cars) {
    if (car.color === "black") continue; //skips all black cars
    if (car.year >= 2020) console.log("We could get this one: ", car);
}
/* The value of break and continue usually comes in 
when you are looping over large data sets, possibley coming from
outside your application/
 */