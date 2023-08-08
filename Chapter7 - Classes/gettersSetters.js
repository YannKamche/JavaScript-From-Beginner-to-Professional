class Man {
    #firstName; //# makes properties inaccessible outside of the class
    constructor(firstname) {
        this.#firstName = firstname;
    }
    get firstname() {
        return this.#firstName;
    }
    set firstname(firstname) {
        this.#firstName = firstname;
    }
}
let p = new Man("brillant");
console.log(p.firstname);
p.firstname = "Adriane";
console.log(p.firstname);

//Getter and setters (accessors): Special properties that we can use to get data from a class 
//The look like functions but they are not