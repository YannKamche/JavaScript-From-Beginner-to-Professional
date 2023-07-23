/**
 Multidimensional Arrays
 It's an array of arrays: a list of lists
 */

 let studentName = ["Peter", "Mary", "John", "Sylvia"];
 let studentClass = ["LSS", "USS", "LSA", "F5A"];
 let studentRollNo = [10, 2, 5, 4];

 let classroom = [studentName, studentClass, studentRollNo];
 console.log(classroom);
//Accessing an element in a multidimensional array
console.log(classroom[0][0]);
let findListOfNames = classroom.find(e => e === studentName);
console.log(findListOfNames);

//An array of array of Arrays
let myArrayOfClassroom = [classroom, classroom, classroom];
console.log(myArrayOfClassroom);

console.log(myArrayOfClassroom.lastIndexOf(classroom));