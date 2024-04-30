// ARRAY DESTRUCTURING

// breaking the array and storing the elements in variable

const myArray = ["value1","value2"];
const myArray2 = ["value1","value2","value3"];

let [myVar1 , myVar2] = myArray;
let [myVar3, ,myVar5] = myArray2;

console.log(myVar1);
console.log(myVar2);
console.log(myVar3);
console.log(myVar5);