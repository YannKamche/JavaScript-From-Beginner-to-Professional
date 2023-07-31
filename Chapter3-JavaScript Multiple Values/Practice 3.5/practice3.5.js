/**
 1. Create an object named people that contains an empty array that
is called friends .
2. Create three variables, each containing an object, that contain
one of your friend's first names, last names, and an ID value.
3. Add the three friends to the friend array.
4. Output it to the console
 */

let people = {
    friends: [
        bestFriend = {
            firstName: "Mary",
            lastName: "Collins",
            ID: "34Er45"
        },

        schoolFriend = {
            firstName: "Peter",
            lastName: "Johnson",
            ID: "34ew65"
        },

        schoolFriend = {
            firstName: "Luke",
            lastName: "John",
            ID: "34f3d5"
        } 
    ]
};
console.log(people.friends[0].firstName);
console.log(people.friends[2].firstName);
console.log(people.friends[1].ID);
console.log(people);