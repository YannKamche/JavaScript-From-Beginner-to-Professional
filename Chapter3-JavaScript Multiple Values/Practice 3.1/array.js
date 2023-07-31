/**
 * Arrays
 Arrays are lists of values. These values can be of all data types
 and one array can even contain different data types. 
 */

 //Creating Arrays
 let arr1 = new Array("purple", "green");
 let arr2 = ["black", "orange"]; //best and most readable
 console.log(arr1);
 console.log(arr2);

 let arr3 = new Array(10);
 let arr4 = [10];

 console.log(arr3);
 console.log(arr4);

 let arr = ["Learn JavaScript", 56, true]; //Mixed arrays
 console.log(typeof arr[0]);
 console.log(typeof arr[1]);
 console.log(typeof arr[2]);

 //You can change the values of a constant array, but you cannot chage the array itself
 const myArray = ["Hi there"];
 console.log(myArray);
 myArray[0] = ["I am learning JavaScript"];
 console.log(myArray[0]);

 //Accessing elements
 //To access an array, we can do it by referencing the array's index
 cars = ["Toyota", "Renault", "Volkswagen"];
 console.log(cars[0]); //Outputs the first element in the array
 console.log(cars); // logs the entire array

 console.log(cars[-1]); //Logs undefined, since no value is assigned at index -1

 //Overwriting elements
 cars[-1] = "Tesla";
 cars[-2] = "BMW";
 console.log(cars);

 
