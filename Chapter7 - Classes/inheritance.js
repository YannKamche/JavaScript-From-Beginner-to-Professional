/**Inheritance
 * It is the conept that classes can have child classes that inherit the properties 
 * and methods from the parent class
 */
class Vehicle {
    constructor (color, currentSpeed, maxSpeed) {
        this.color = color;
        this.currentSpeed = currentSpeed;
        this.maxSpeed = maxSpeed;
    }

    //properties
    move() {
        console.log("moving at", this.currentSpeed);
    }
    accelerate(amount) {
        this.currentSpeed += amount;
    }
}

//We create a Motorcycle class inheriting from the vehicle class using the 'extends' keyword
class Motorcycle extends Vehicle {
    constructor(color, currentSpeed, maxSpeed, fuel) {
        super(color, currentSpeed, maxSpeed);
        //super calls the constructor from the parent (not optional)
        this.fuel = fuel;
    }
    doWheelie() {
        console.log("Drivig on one wheel!");
    }
}

let motor = new Motorcycle("Black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();
