// how to clone an array

let array1 = ['item1','item2'];
//let array2 = ['item1','item2'];
//we wont use this array if we have large no. of elements in array

//let array2 = array1.slice(0); // 2nd method
//console.log(array2); 

//let array2 = [].concat(array1); //3rd method
//console.log(array2); 

let array2 = [...array1];  //most used one 
//... is known as a spread operator
console.log(array2); 


console.log(array1===array2);
array1.push("item3");

console.log(array1);
console.log(array2);
