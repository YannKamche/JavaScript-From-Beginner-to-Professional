/*OOP
It is a very important programming paradigm wherein
code is structured in objects.leading to more maintainable and reusable code. */
//Objects are a collection of properties and methods
class Dog { //Dog class 
    constructor(dogName, weight, color, breed) {
        this.dogName = dogName; //Properties are recognised with 'this'
        this.weight = weight;
        this.color = color;
        this.breed = breed;
        /**
         The paramater of the constructor and the properties of the class have the same name*/
    }
};
let dog = new Dog("JavaScript", 2.4, "brown", "Chichuaua");
console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight);
//Constructors: Special method used to initialize objects with the class blue prints
//new: tells JavaScript to look for the special constructor function in 
//     in the Class and create a new object.
class Person {
    constructor (name) {
        this.name = name;
    }
}
let person1 = new Person("James");
console.log(person1.name);
//Methods: functions on a class. They don't use the function keyword
class Animal {
    constructor (name, classification) {
        this.name = name;
        this.classification = classification;
    }
    animalType() {
        console.log("This animal is", this.classification);
    }
}
class myPerson {
    constructor (name, hairstyle = 'unkwnon') {
        this.name = name;
    }
    complimentSomeone(name, hairstyle) {
        console.log(`Hey ${name}! I love your ${hairstyle}`);
    }
}
let p1 = new myPerson("John");
let p2 = new myPerson("Mary");
p1.complimentSomeone(p2.name), p2.hairstyle;//John compliments Mary