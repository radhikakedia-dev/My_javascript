// looping in array

let fruits = ['apple','mango','grapes','banana'];
 
// length is the most important property of an array

console.log(fruits.length);
console.log(fruits[fruits.length-1]);
//make an array with all the same elements of fruits but in uppercase
let fruits1 = ['apple','mango','grapes','banana'];
let fruitsUpperCase = [];

for (let i = 0; i < fruits1.length; i++) {
    fruitsUpperCase.push(fruits1[i].toUpperCase());
}

console.log(fruitsUpperCase);
