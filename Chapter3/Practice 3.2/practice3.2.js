//1. Create an empty array to use as a shopping List
let shoppingList = [];
//2. Add Milk , Bread , and Apples to your list.
shoppingList.splice(0, 0, "Milk", "Bread", "Apples");

//3. Update " Bread " with Bananas and Eggs.
let indexOfBread = shoppingList.indexOf("Bread");
shoppingList.splice(indexOfBread, 1, "Bananas", "Eggs");
console.log(shoppingList);

//4.Remove the last item from the array and output it into the console
let lastItem = shoppingList.pop();
console.log(lastItem);

//5. Sort the list alphabetically
shoppingList.sort();

//6. Find and output the index value of Milk
let indexOfMilk = shoppingList.indexOf("Milk");
console.log(indexOfMilk);

//7. After Bananas, add Carrots and Lettuce
let indexOfBananas = shoppingList.indexOf("Bananas");
shoppingList.splice(++indexOfBananas, 0, "Carrots", "Lettuce");

//8. Create a new list containing Juice and Pop.
let newList = ["Juice", "Pop"];

//9. Combine both lists, adding the new list twice to the end of the first list
let newShoppingList = shoppingList.concat(newList);
console.log(newShoppingList);

//10. Get the last index value of Pop and output it to the console.

let lastIndexOfPop = newShoppingList.lastIndexOf("Pop");
console.log(lastIndexOfPop);

//11. Final Result: ["Bananas", "Carrots", "Lettuce", "Eggs", "Milk", "Juice", "Pop",]
console.log(newShoppingList);