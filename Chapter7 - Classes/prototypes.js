/**Prototypes
 * It is the mechanism in JavaScript that makes it possible to 
 * have objects 
 * It helps in adding functions or properties to a class from outside
 */

class Person {
    constructor (firstname,lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet () {
        console.log("Hi there!");
    }
}

let myPerson = new Person("James", "Henry");
console.log(myPerson);

Person.prototype.introduce = function () {
    console.log("Hi, I'm ", this.firstname);
};

Person.prototype.favoriteColor = "green";
myPerson.greet();
myPerson.introduce();
console.log(myPerson.favoriteColor);

class Animal {
    constructor (namespecie, sound) {
        this.namespecie = namespecie;
        this.sound = sound;
    }
    animalSound() {
        console.log(this.sound, this.namespecie);
    }
}
let myAnimal = new Animal("dog", "bark");
Animal.prototype.move = function () {
    console.log("run");
}

console.log(myAnimal);
myAnimal.move()