let myWork = [];

for(let i = 1; i <= 10; i++) {
    let status = i % 2 === 0 ? true: false;
    let lesson = {
        name: `Lesson ${i}`,
        status: status
    }
    console.log(myWork.push(lesson));
}
console.log(myWork);