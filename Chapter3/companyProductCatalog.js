/*
In this project, you will implement a data structure for a product
catalog and create queries to retrieve data.
1. Create an array to hold an inventory of store items.
 */
let storeInventory = [];

//2. Create three items, each having the properties of name, model,cost, and quantity.
let item1 = {
    name: "orange",
    model: "model1",
    cost: 250,
    quantity: 3
}
let item2 = {
    name: "banana",
    model: "model2",
    cost: 300,
    quantity: 4
}
let item3 = {
    name: "guava",
    model: "model3",
    cost: 100,
    quantity: 2
}
//3. Add all three objects to the main array using an array method
//,and then log the inventory array to the console.
storeInventory.splice(0, 0, item1, item2, item3);
console.log(storeInventory);

//4. Access the quantity element of your third item, and log it to theconsole. 
// Experiment by adding and accessing more element swith in your data structure.
console.log(storeInventory[2].quantity);
let findGuava = storeInventory.find(e => e === item2);
console.log(findGuava);
storeInventory.push(
    item4 = {
    name: "pineapple",
    cost: 400

});
console.log(storeInventory.length);
console.log(storeInventory);