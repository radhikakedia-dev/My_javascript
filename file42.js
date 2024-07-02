// every method
//the every method is used on arrays to test whether all elements in the array pass a certain condition implemented by a provided function.

const numbers = [2,4,6,8,10];

let ans = numbers.every((number) => number % 2 ===0);
console.log(ans);




const userCart = [
    {productId : 1 , productName : "Mobile" , price :20000},
    {productId : 2 , productName : "TV" , price :21000},
    {productId : 3 , productName : "Laptop" , price :22000},
    {productId : 4 , productName : "Camera" , price :23000},
]

// check if there is a product whose price is below 22000

const result = userCart.every((product) => product.price < 22000);
console.log(result);