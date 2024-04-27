//how to concatenate an array

let array1 = ['item1','item2'];

let array2 = array1.slice(0).concat(['item3','item4']); //1st method

let array3 = [].concat(array1,['item2','item4']); //2nd method

console.log(array2);
console.log(array3);