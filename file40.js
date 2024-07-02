// sort method
// till now forEach , map , filter were not mutating the array ,they are returning a new array
// whereas, reduce was returning a single value
// but the sort method will mutate the actual array

const numbers = [5,8,100,12,1,126,69];
numbers.sort();
console.log(numbers);

// why this happened?
//javascript is not taking this as a number it's taking this as string
//and in the basis of ASCII value its sorting this

//now this has a pro and a con
//pro: it sorts in alphabetical order
//con: it doesn't sorts number but we have a solution for this

const userNames = ["radhika","ankita","neha","sristi"];
userNames.sort();
console.log(userNames);

// sort also accept the callback function

const num = [5,25,100,12,126];
num.sort((a,b) => {
    return a-b ;
})
console.log(num);

// how this works?
// 5 , 25
// a - b = 5-25
// a - b --> positive(greater than zero)--> b,a
// b - a --> negative(less than zero)--> a,b

// more realistic example

// price low to high or high to low

const products = [
    {productId : 1 , productName : "p1" , price : 6000},
    {productId : 2 , productName : "p2" , price : 8000},
    {productId : 3 , productName : "p3" , price : 10000},
    {productId : 4 , productName : "p4" , price : 2000},
    {productId : 5 , productName : "p5" , price : 7000},
]
// low to high

products.sort((a,b) => {
    return a.price - b.price ;
});
console.log(products); 

//don't want to change the array

const lowtohigh = products.slice(0).sort((a,b) => {
    return a.price - b.price ;
})
console.log(lowtohigh);

