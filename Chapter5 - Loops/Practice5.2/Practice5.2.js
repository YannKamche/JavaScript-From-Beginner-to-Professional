/*Basic counter */
//1. Set the starting counter 0
let counter = 0;

//2. Create a variable, step, to increse your counter by 1
let step = 2;

//3. Add a do while loop, prining the counter to the console and incrementing
//it by the step amount each loop
do {
    counter += step;
    console.log(counter);
} while(!(counter >= 100));
