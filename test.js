const array = ["test1", "test2", "test3"];

const array2 =array.map(element => element + " smith").filter(element => element === "test1 smith");
console.log(array2);