/*4) Nested Loops */
let arrOfArr = [];
for (let i = 0; i < 3; i++){
    arrOfArr.push([]);
    for (let j = 0; j < 10; j++) {
        arrOfArr[i].push(j);
    }
}
   

console.log(arrOfArr);
