// push 

let fruits = ['apple','banana','orange','grape'];
console.log(fruits);

fruits.push("mango");
console.log(fruits);

//push will add the element at the end of the array
//[ 'apple', 'banana', 'orange', 'grape', 'mango' ]


//pop
let poppedfruit = fruits.pop(); //pop is a function which returns something
console.log("The popped fruit is ",poppedfruit);

//pop will remove the last element of the array
//['apple','banana','orange','grape']

fruits.unshift("mango");
console.log(fruits);
//unshift will add the element at the beginning of the array

fruits.shift(); //it returns something
console.log(fruits);

//push and pop is faster than shift and unshift
 