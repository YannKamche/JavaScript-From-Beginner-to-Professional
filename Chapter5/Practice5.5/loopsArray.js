let names = ["Paul", "Peter", "John"];

//Create a Paul object and display the name and position
let Paul = {
    name: names.find(e => e === "Paul"),
    position: names.indexOf("Paul")
} 

console.log(Paul.name, Paul.position);

//Concatenate each name in the array with Hello
for (let i = 0; i < names.length; i++) {
    names[i] = `hello ${names[i]}`;
}
console.log(names);

//startWith(): checks whether the string starts with a certain character.
let africanCountries = ["Cameroon", "Mali", "Nigeria", "Mauritania"];

for (let i = 0; i < africanCountries.length; i++) {
    if(africanCountries[i].startsWith("M")) {
        delete africanCountries[i];
        continue;
    }
}
console.log(africanCountries);

/*For of loop: Loops over the elements of an array*/
let myName = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
for (let name of myName) {
    console.log(name);
}
let myArray = [];
for (let i = 0; i < 10; i++) {
    myArray.push(i);
}
for (let number of myArray) {
    console.log(number);
}

/*For in loop: Loops over an object */
let car = {
    model: "Golf",
    make: "Volkswagen"
};
for (let prop of car) {
    console.log(car[prop]);
}





