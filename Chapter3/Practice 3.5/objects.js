// Working with objects and arrays
/**
 1. Objects in objects
 */
let company = {
    companyName: "Healthy Candy",
    activity: "food manufacturing",
    address: {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    yearOfEstablishment: 2021
}
console.log(company.address.state);
console.log(company["address"]["street"]);

/*
2. Arrays in objects */
let school = {
    schoolName: "St John excellence School",
    activity: ["Basketball", "Football", "Athletics", "Gymnastics"],
    yearOfEstablishment: 2018
}
console.log(school.activity[0]);

/*
3. Objects in arrays */
let addresses = [
    {
        street: "2nd street",
        number: "123",
        city: "Los Angeles",
        state: "Cameroon"
    },
    {
        street: "1st West avenue",
        number: "5",
        city: "Addison",
        state: "Texas"
    }
];
console.log(addresses[0].number, addresses[0].street);
/*
4. Objects in arrays in objects */

let newCompany = { 
    companyName: "Healthy Candy",
    activities: [ "food manufacturing","improving kids' health","manufacturing toys"],
    address: [{
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
},
{
        street: "1st West avenue",
        number: "5",
        zipcode: "75001",
        city: "Addison",
        state: "Texas"
        }],
    yearOfEstablishment: 2021
};

console.log(newCompany.address[0].number, newCompany.address[1].zipcode);